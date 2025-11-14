import Image from "next/image";

export function CollaboratorsCard({ assign, name }) {
  return (
    <div className="border-accent-foreground group w-fit max-w-[152px] rounded-md border bg-slate-950 transition-all duration-400 ease-out hover:scale-105 md:bg-slate-950/80">
      <div className="relative mb-2 flex h-[150px] w-[150px] shrink-0 cursor-pointer flex-col items-center justify-center group-hover:brightness-50">
        <Image
          quality={50}
          height={150}
          width={150}
          style={{
            width: "100%",
            height: "100%",
          }}
          src={`/collaborators/images/${name}.png`}
          alt={`${assign} ${name} Image`}
          className="absolute rounded-t-md"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-y-1.5 p-2 pt-0 text-left">
        <h4 className="text-[17px] leading-6 wrap-break-word font-stretch-extra-expanded">
          {name}
        </h4>
        <h6 className="text-ring text-left text-sm">{assign}</h6>
      </div>
    </div>
  );
}

export function ProducersCards({ producers }) {
  const prodArr = producers.replaceAll(", ", ",").split(",");
  return (
    <>
      {prodArr.map((producer, i) => {
        return (
          <CollaboratorsCard assign={"Producer"} name={producer} key={i} />
        );
      })}
    </>
  );
}
