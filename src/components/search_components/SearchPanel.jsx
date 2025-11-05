import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { XIcon } from "lucide-react";

export default function SearchPanel({ term, open, setOpen, children }) {
  return (
    <div className="fixed top-20 right-0 left-0 px-[200px]">
      <div
        className={clsx(
          "m-0 min-w-full gap-0 rounded-md border border-slate-600 bg-slate-950 p-4",
          {
            "sr-only": !open || !term,
          },
        )}
      >
        <div className="m-0 flex min-w-full flex-col items-end gap-0 p-0">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
            className="m-0! mb-1! cursor-pointer gap-0! bg-transparent! p-0! transition-all duration-200 ease-out hover:scale-120"
          >
            <XIcon className="rounded-md bg-slate-900 p-1 text-slate-200" />
          </Button>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
