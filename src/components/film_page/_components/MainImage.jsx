import Image from "next/image";

export default function MainImage({ image }) {
  return (
    <div className="relative h-[550px] w-[365px] shrink-0 cursor-pointer md:mr-10 md:h-[450px] md:w-[300px] md:pl-0">
      <Image
        quality={100}
        width={365}
        height={550}
        style={{
          width: "100%",
          height: "100%",
        }}
        src={image}
        alt={"Main Image"}
        className="border-accent-foreground/60 rounded-lg border-2 brightness-75 transition-all duration-400 ease-out hover:scale-[1.01] hover:border-white hover:brightness-50"
      />
    </div>
  );
}
