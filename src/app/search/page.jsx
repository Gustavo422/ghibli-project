"use client";

import ClientSearchResult from "@/components/search_components/ClientSearchResult";
import { Input } from "@/components/ui/Input";
import { clsx } from "clsx";
import { SearchIcon } from "lucide-react";
import { Suspense, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function SearchPage() {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = useDebouncedCallback((term) => {
    setTerm(term);
  }, 400);

  return (
    <main className="flex h-full w-full flex-col items-center justify-start py-4">
      <div className="flex h-full w-full flex-col items-center justify-start gap-3">
        <h2 className="text-center text-2xl md:text-3xl">
          Search for films, characters, director and much more!
        </h2>
        <div className="flex w-[90%] items-center justify-center gap-2 rounded-md bg-slate-900 sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <form className="flex w-full flex-col rounded-md border">
            <div className="flex items-center justify-start gap-3 px-3">
              <SearchIcon />
              <Input
                className="order-2 m-0! h-8 w-full gap-0! border-none! p-0! pl-7 text-slate-400 shadow-none! focus-visible:ring-0!"
                placeholder="Type to search your favorite movies..."
                type="form"
                onChange={(e) => {
                  const v = e.target.value;
                  handleSearch(v);
                }}
                onClick={() => setOpen(true)}
                defaultValue={term}
              />
            </div>
            <div className={clsx("bg-slate h-20", { "h-fit!": term || open })}>
              <hr className={clsx("sr-only", { "not-sr-only!": open })} />
              <Suspense>
                <ClientSearchResult
                  term={term}
                  className="rounded-none! rounded-b-md! border-none!"
                />
              </Suspense>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
