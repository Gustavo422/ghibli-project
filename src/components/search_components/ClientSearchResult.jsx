"use client";
import EmptySearch from "@/components/search_components/EmptySearch";
import ErrorResult from "@/components/search_components/ErrorResult";
import SearchResult from "@/components/search_components/SearchResult";
import useSearch from "@/hooks/use-search";
import { clsx } from "clsx";

export default function ClientSearchResult({ term, open, setOpen, className }) {
  const { data, loading, error } = useSearch(term);

  if (error) {
    return <ErrorResult setOpen={setOpen} />;
  }

  if (loading) {
    return (
      <div className="animate-fade-in m-3 flex w-full items-center justify-center text-slate-300">
        <h3 className="mr-3 animate-pulse text-2xl font-medium">
          Loading <span className="animate-ellipsis inline-block" />
        </h3>
      </div>
    );
  }

  if (!loading && data.length === 0 && term && typeof data == "object") {
    return <EmptySearch term={term} />;
  }
  if (!loading && data.length > 0) {
    return (
      <div
        className={clsx(
          "animate-fade-in border-accent-foreground min-w-full rounded-md border bg-slate-950 p-3",
          className,
        )}
      >
        <div className="m-0 flex min-w-full flex-col overflow-hidden rounded-md p-0">
          {data.map((findedItems, i) => (
            <SearchResult
              key={i}
              title={findedItems?.item?.title}
              image={findedItems?.item?.image}
              description={findedItems?.item?.description}
            />
          ))}
        </div>
      </div>
    );
  }
}
