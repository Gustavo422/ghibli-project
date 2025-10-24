import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export function SearchForm({ ...props }) {
  return (
    <form {...props}>
      <div className="relative lg:w-72">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          placeholder="Type to search your favorites films..."
          className="h-8 pl-7"
        />
        <SearchIcon className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </div>
    </form>
  );
}

export function MobileSearchForm({ className }) {
  return (
    <Dialog>
      <form className={className}>
        <DialogTrigger
          className="m-0 flex h-full w-full items-center justify-center p-0"
          asChild
        >
          <Button
            type="button"
            variant="ghost"
            className="m-0 h-full w-full p-0"
          >
            <SearchIcon strokeWidth={3} className="m-0 mt-[2px] h-6 w-6 p-0" />
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center justify-center">
          <DialogHeader className="flex items-center justify-center">
            <DialogTitle className="text-center">
              Search Films for Studio Ghibli
            </DialogTitle>
          </DialogHeader>
          <div></div>
          {/*
          <DialogFooter className="flex w-full items-center justify-center">
            <DialogClose className="w-28 self-start justify-self-start" asChild>
              <Button
                className="gap-2 bg-red-600 px-3 py-2 text-[15px] hover:bg-red-800"
                variant="destructive"
              >
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
          */}
        </DialogContent>
      </form>
    </Dialog>
  );
}
