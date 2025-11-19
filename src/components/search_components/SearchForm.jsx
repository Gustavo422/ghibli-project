"use client";

import ClientSearchResult from "@/components/search_components/ClientSearchResult";
import SearchPanel from "@/components/search_components/SearchPanel";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchIcon, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchForm() {
  const mobileDetection = useIsMobile();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [term, setTerm] = useState(searchParams.getAll("query").toString());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (term) {
      setOpen(true);
    }
    if (term && mobileDetection) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    setTerm(term);
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      {!mobileDetection && (
        <div>
          <form className="border-ring rounded-md border transition-all duration-200 ease-out focus-within:scale-105 hover:scale-105">
            <div className="flex h-full w-72 items-center justify-start">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SearchIcon className="text-ring pointer-events-none order-1 mx-1.5 rounded-full transition-all duration-200 ease-out select-none" />
              <Input
                id="search"
                placeholder="Type to search your favorites films..."
                className="order-2 m-0 h-8 w-full rounded-none rounded-r-md border-0 p-px focus-visible:ring-0!"
                defaultValue={term}
                onChange={(e) => {
                  const v = e.target.value;
                  setOpen(true);
                  handleSearch(v);
                }}
              />
            </div>
          </form>
          <SearchPanel term={term} open={open} setOpen={setOpen}>
            <ClientSearchResult
              term={term || ""}
              open={open}
              setOpen={setOpen}
            />
          </SearchPanel>
        </div>
      )}
      {mobileDetection && (
        <Popover open={open} onOpenChange={setOpen} className="w-full">
          <form>
            <PopoverTrigger
              className="border-accent-foreground flex h-full w-full items-center justify-center border bg-black/30 transition-all duration-200 hover:border-black/30 hover:bg-slate-100/30"
              asChild
            >
              <Button
                type="button"
                variant="ghost"
                className="m-0 h-full w-full cursor-pointer p-0"
              >
                <SearchIcon
                  strokeWidth={3}
                  className="m-2 h-6 w-6 rounded-lg"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              aria-describedby="Search Tool"
              className="flex w-screen items-center justify-center gap-0! rounded-md border border-transparent p-0!"
              side="bottom"
              align="center"
              style={{ transform: "translateY(17px)" }}
            >
              <div className="flex h-full w-[99%] flex-col gap-3 rounded-md border bg-slate-950 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-center text-lg font-semibold text-slate-200">
                    Search Films for Studio Ghibli
                  </h3>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    className="m-0! mb-1! cursor-pointer gap-0! bg-transparent! p-0! transition-all duration-200 ease-out hover:scale-120"
                  >
                    <XIcon className="rounded-md bg-slate-900 p-1 text-slate-200" />
                  </Button>
                </div>
                <div className="relative flex items-center justify-center gap-2 rounded-md border border-slate-200 p-1 px-2">
                  <Input
                    id="search"
                    placeholder="Type to search your favorites films..."
                    className="text-ring order-2 m-0! h-8 w-full gap-0! border-none! p-0! pl-7 focus-visible:ring-0!"
                    defaultValue={term}
                    type="search"
                    onChange={(e) => {
                      const v = e.target.value;
                      handleSearch(v);
                    }}
                  />
                  <SearchIcon className="pointer-events-none order-1 text-slate-200 select-none" />
                </div>
                <ClientSearchResult term={term || ""} />
              </div>
            </PopoverContent>
          </form>
        </Popover>
      )}
    </>
  );
}
