"use client";

import ClientSearchResult from "@/components/ClientSearchResult";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { clsx } from "clsx";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchForm({ ...props }) {
  const mobileDetection = useIsMobile();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [term, setTerm] = useState(searchParams.get("query") ?? "");
  const [startedTyping, setStartedTyping] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    setSearch(term);
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  const handleChange = (e) => {
    const v = e.target.value;
    if (!startedTyping || v.trim() !== "") {
      setStartedTyping(false);
    }
    if (startedTyping || v.trim() !== "") {
      setStartedTyping(true);
    }
  };

  return (
    <>
      {!mobileDetection && (
        <div>
          <form {...props}>
            <div className="relative h-full w-72">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Type to search your favorites films..."
                className="h-8 pl-7"
                value={term}
                onChange={(e) => {
                  const v = e.target.value;
                  console.log(v);
                  setTerm(v);
                  if (v.trim() !== "") {
                    setSearch(v);
                  } else {
                    setSearch("");
                  }
                  handleSearch(v);
                }}
              />
              <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
            </div>
          </form>
          <div className={clsx("fixed top-20 right-0 left-0 px-[200px]")}>
            <div className="rounded-md border bg-slate-950 p-3">
              <ClientSearchResult
                term={search || searchParams.get("query") || ""}
              />
            </div>
          </div>
        </div>
      )}
      {mobileDetection && (
        <Dialog>
          <form>
            <DialogTrigger
              className="m-0 flex h-full w-full items-center justify-center p-0"
              asChild
            >
              <Button
                type="button"
                variant="ghost"
                className="m-0 h-full w-full p-0"
              >
                <SearchIcon
                  strokeWidth={3}
                  className="m-0 mt-0.5 h-6 w-6 p-0"
                />
              </Button>
            </DialogTrigger>
            <DialogContent
              aria-describedby="Search Tool"
              className="flex flex-col items-center justify-center rounded-md bg-slate-950"
            >
              <DialogHeader className="flex items-center justify-center">
                <DialogTitle className="text-center">
                  Search Films for Studio Ghibli
                </DialogTitle>
              </DialogHeader>
              <div className="relative w-full">
                <Input
                  id="search"
                  placeholder="Type to search your favorites films..."
                  className="h-8 w-full bg-white pl-7 text-black"
                  value={term}
                  onChange={(e) => {
                    handleChange(e);
                    const v = e.target.value;
                    setTerm(v);
                    handleSearch(v);
                  }}
                />
                <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-slate-950 opacity-50 select-none" />
              </div>
              <DialogFooter>
                <ClientSearchResult
                  term={search || searchParams.get("query") || ""}
                />
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      )}
    </>
  );
}
