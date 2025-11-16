import Image from "next/image";

export default function MainImage({ image }) {
  return (
    <div className="relative h-[450px] w-[300px] shrink-0 cursor-pointer md:mr-10">
      <Image
        quality={75}
        width={300}
        height={450}
        style={{
          width: "100%",
          height: "100%",
        }}
        src={image}
        alt={"Main Image"}
        className="md:hover-group:brightness-50 rounded-lg brightness-75 transition-all duration-400 ease-out md:rounded-none md:rounded-l-lg"
      />
    </div>
  );
}
