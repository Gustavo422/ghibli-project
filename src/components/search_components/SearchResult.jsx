import { slugCreator } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function SearchResult({ title, image, description }) {
  return (
    <div className="border-accent-foreground m-2 flex flex-col rounded-md border transition-all duration-200 hover:scale-[1.01]">
      <Link
        href={`/films/${slugCreator(title)}`}
        className="flex rounded-md hover:bg-black/50"
        onClick={() => setOpen(false)}
      >
        <div className="relative aspect-2/3 h-[85px] w-[58px] rounded-l object-cover">
          <Image
            fill
            alt="Image of Film search"
            src={image}
            className="border-accent-foreground rounded-l-md border-r object-cover"
          />
        </div>
        <div className="h-full w-full flex-col pr-2">
          <h4 className="text-ring line-clamp-1 pl-3 text-xl font-medium">
            {title}
          </h4>
          <p className="mb-2 line-clamp-2 pl-3">{description}</p>
        </div>
      </Link>
    </div>
  );
}
