import Image from "next/image";

const notEmptyUrl = (url) => {
  return (
    typeof url == "string" &&
    url.startsWith("https://ghibliapi.vercel.app/people/") &&
    url.length > "https://ghibliapi.vercel.app/people/".length
  );
};

export default async function Characters({ people }) {
  const validUrls = people.filter((url) => notEmptyUrl(url));
  console.log(validUrls);
  console.log(people);
  if (validUrls.length == 0) {
    return <></>;
  }

  const results = await Promise.allSettled(
    validUrls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error("Invalid API request");
        return res.json();
      }),
    ),
  );

  const peoplesData = results
    .filter((r) => r.status == "fulfilled")
    .map((r) => r.value);
  return (
    <div className="mt-3 flex flex-col flex-wrap gap-3">
      <h3 className="text-xl font-medium text-slate-200 md:text-2xl">
        Characters:
      </h3>
      <div className="flex flex-wrap gap-4">
        {peoplesData.map((person) => {
          return (
            <div
              className="group border-accent-foreground flex w-fit max-w-[150px] flex-col gap-y-2 rounded-md border bg-slate-950 transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              key={person?.id}
            >
              <div className="relative h-[150px] w-[150px] group-hover:brightness-50">
                <Image
                  quality={50}
                  height={150}
                  width={150}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={`/characters/${person?.name}.png`}
                  alt={`${person?.name}`}
                  className="absolute rounded-t-md object-contain"
                />
              </div>
              <h2 className="mb-2 text-center text-wrap">{person?.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
