import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { clsx } from "clsx";
import { redirect } from "next/navigation";

const TOTALPAGES = 3;

export default async function PaginationComp({ actualPage }) {
  let active = false;
  let actual_page = 0;
  let { page } = await actualPage;
  page = Number(page);
  if (page === 0 || page > TOTALPAGES) {
    redirect("/films");
  }

  return (
    <Pagination>
      <PaginationContent className="mt-3">
        <PaginationItem>
          <PaginationPrevious
            className={clsx("rounded-md md:text-lg", {
              "cursor-not-allowed": page == 1,
            })}
            href={
              page === 1
                ? `#`
                : page === 2
                  ? `/films`
                  : `/films/pages/${page - 1}`
            }
          />
        </PaginationItem>

        {Array.from({ length: TOTALPAGES }).map(
          (_, index) => (
            (actual_page = index + 1),
            (active = actual_page === page ? true : false),
            (
              <PaginationItem key={actual_page} className="p-2">
                <PaginationLink
                  className={clsx("px-3 py-1 md:text-lg", {
                    "text-accent border-accent-foreground border bg-black/25 transition-colors duration-300":
                      active,
                  })}
                  href={
                    actual_page == 1 ? `/films` : `/films/pages/${actual_page}`
                  }
                  isActive={active}
                >
                  {actual_page}
                </PaginationLink>
              </PaginationItem>
            )
          ),
        )}

        <PaginationItem>
          <PaginationNext
            className={clsx("md:text-xl", {
              "cursor-not-allowed": TOTALPAGES == page,
            })}
            href={TOTALPAGES === page ? `#` : `/films/pages/${page + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
