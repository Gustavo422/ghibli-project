import Image from "next/image";

export default function BgImage({ movie_banner, id }) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <Image
        quality={20}
        fill
        src={movie_banner}
        priority
        alt={`Banner of the movie with id: ${id}`}
        className="z-0 object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 z-1 h-screen w-full bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-900/85" />
    </div>
  );
}
