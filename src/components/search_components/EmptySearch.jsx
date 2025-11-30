import { ClapperboardIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/Separator";

export default function EmptySearch({ term }) {
  let search = term;
  if (!search) {
    search = "Invalid Input!";
  }
  return (
    <div className="border-accent-foreground flex h-full w-full flex-col items-center justify-center rounded-md border bg-slate-950 py-3">
      <div className="mb-2 flex flex-col items-center justify-center md:mb-5">
        <h3 className="text-accent flex items-center justify-center gap-y-2 text-center text-3xl font-bold sm:text-2xl md:text-4xl">
          <ClapperboardIcon className="mr-2 line-clamp-1 aspect-square h-7 w-7 md:mr-3 md:h-[33px] md:w-[33px]" />
          Any films found!
        </h3>
        <p className="text-ring mx-8 mt-1 text-center text-base md:text-lg">
          We couldn’t find any movies for your search.
        </p>
      </div>
      <Separator className="bg-accent-foreground mt-2 mb-4 h-px w-[90%] rounded-full sm:mt-0" />
      <div className="flex flex-col justify-start text-center">
        <h4 className="text-accent text-xl font-normal sm:text-lg lg:text-2xl">
          Instances of valid Inputs:
        </h4>
        <div className="mt-3 flex flex-wrap gap-2 sm:justify-center md:flex-col lg:flex-row">
          <Link
            href={`/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`}
            className="rounded-md bg-green-300 px-3 py-1 font-medium text-green-900 transition-all duration-200 hover:scale-105 hover:bg-green-700/85 hover:text-green-300"
          >
            Tonari no Totoro
          </Link>
          <Link
            href={`/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`}
            className="rounded-md bg-green-300 px-3 py-1 font-medium text-green-900 transition-all duration-200 hover:scale-105 hover:bg-green-700/85 hover:text-green-300"
          >
            My Neighbor Totoro
          </Link>
        </div>
      </div>
    </div>
  );
}
