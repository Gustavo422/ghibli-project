"use client";

import ClientSearchResult from "@/components/search_components/ClientSearchResult";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchPanel from "./SearchPanel";

export function SearchForm({ ...props }) {
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
          <form {...props}>
            <div className="relative h-full w-72">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Type to search your favorites films..."
                className="h-8 pl-7"
                defaultValue={term}
                onChange={(e) => {
                  const v = e.target.value;
                  setOpen(true);
                  handleSearch(v);
                }}
              />
              <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
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
        <Dialog open={open} onOpenChange={setOpen}>
          <form>
            <DialogTrigger
              className="m-0 flex h-full w-full items-center justify-center bg-transparent p-0 transition"
              asChild
            >
              <Button
                type="button"
                variant="ghost"
                className="m-0 h-full w-full cursor-pointer p-0"
              >
                <SearchIcon
                  strokeWidth={3}
                  className="m-2 h-6 w-6 rounded-lg p-0"
                />
              </Button>
            </DialogTrigger>
            <DialogPortal>
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
                    defaultValue={term}
                    onChange={(e) => {
                      const v = e.target.value;
                      handleSearch(v);
                    }}
                  />
                  <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-slate-950 opacity-50 select-none" />
                </div>
                <DialogFooter>
                  <ClientSearchResult term={term || ""} />
                </DialogFooter>
              </DialogContent>
            </DialogPortal>
          </form>
        </Dialog>
      )}
    </>
  );
}
