import { ClapperboardIcon, SearchXIcon } from "lucide-react";
import Link from "next/link";

export default function EmptySearch({ term }) {
  let search = term;
  if (!search) {
    search = "Invalid Input!";
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-slate-800 bg-slate-950 py-3 sm:bg-slate-900">
      <div className="mb-4 flex h-11 w-[90%] items-center justify-start rounded-md border border-red-400 bg-red-300 p-3 font-medium lg:w-[450px]">
        <SearchXIcon className="mr-2 text-red-600 md:h-6 md:w-6" />
        <p className="text-xl font-medium text-red-600">{search}</p>
      </div>
      <div className="mb-2 flex flex-col items-center justify-center md:mb-5">
        <h3 className="flex items-center justify-center gap-y-2 text-center text-3xl font-bold text-slate-300 sm:text-2xl md:text-4xl">
          <ClapperboardIcon className="mr-2 line-clamp-1 aspect-square h-7 w-7 md:mr-3 md:h-[33px] md:w-[33px]" />
          Any films found!
        </h3>
        <p className="mx-10 mt-1 text-center text-lg font-medium text-slate-500 sm:text-base md:text-xl">
          We couldn’t find any movies for your search.
        </p>
      </div>
      <hr className="mt-3 mb-4 h-px w-[90%] rounded-full bg-slate-100 sm:mt-0 sm:text-slate-800" />
      <div className="flex flex-col justify-start text-center">
        <h4 className="text-xl font-medium text-slate-300 sm:text-lg lg:text-xl">
          Instances of valid Inputs:
        </h4>
        <div className="mt-2 flex flex-wrap gap-2 sm:justify-center md:flex-col lg:flex-row">
          <Link
            href={`/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`}
            className="rounded-xl bg-green-300 px-3 py-1 font-medium text-green-900 transition-all duration-200 hover:scale-105 hover:bg-green-700/85 hover:text-green-300"
          >
            Tonari no Totoro
          </Link>
          <Link
            href={`/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`}
            className="rounded-xl bg-green-300 px-3 py-1 font-medium text-green-900 transition-all duration-200 hover:scale-105 hover:bg-green-700/85 hover:text-green-300"
          >
            My Neighbor Totoro
          </Link>
        </div>
      </div>
    </div>
  );
}
