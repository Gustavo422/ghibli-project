"use client";
import EmptySearch from "@/components/search_components/EmptySearch";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientSearchResult({ term, open, setOpen }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!term) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData([]);
      setLoading(false);
      setError(false);
      return;
    }

    setLoading(true);
    const controller = new AbortController();

    fetch(`/api/search?query=${encodeURIComponent(term)}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(true);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [term]);

  if (error) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-y-3">
        <h1 className="text-base text-slate-200">Someting went wrong...</h1>
        <Link href="/">
          <Button
            variant="destructive"
            className="flex items-center justify-center gap-2 bg-red-700 px-3 py-2 hover:bg-red-800"
            type="button"
            onClick={() => setOpen(false)}
          >
            <HomeIcon className="text-slate-200" />
            <p className="text-[15px] font-medium text-slate-200">
              Back to home Page
            </p>
          </Button>
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center text-slate-300">
        <h3 className="mr-3 animate-pulse text-2xl font-medium">
          Loading <span className="animate-ellipsis inline-block" />
        </h3>
      </div>
    );
  }
  const finalData = data;
  if (!loading && finalData.length === 0 && term) {
    return <EmptySearch term={term} />;
  }
  if (!loading && data.length > 0) {
    return (
      <div className={clsx("min-w-full rounded-md border bg-slate-950 p-3")}>
        <div className="m-0 flex min-w-full flex-col overflow-hidden rounded-md p-0">
          {data.map((findedItems, i) => (
            <div
              key={i}
              className="m-2 flex flex-col rounded-md border transition-transform duration-200 hover:scale-[1.01]"
            >
              <Link
                href={`/films/${findedItems?.item?.id}`}
                className="flex rounded-md hover:bg-black/50"
                onClick={() => setOpen(false)}
              >
                <div className="relative aspect-2/3 h-[85px] w-[58px] rounded-l object-cover">
                  <Image
                    fill
                    alt="Image of Film search"
                    src={findedItems?.item?.image}
                    className="rounded-l-md border-r border-slate-600 object-cover"
                  />
                </div>
                <div className="h-full w-full flex-col pr-2">
                  <h4 className="line-clamp-1 pl-3 text-xl font-medium text-slate-400">
                    {findedItems?.item?.title}
                  </h4>
                  <p className="mb-2 line-clamp-2 pl-3">
                    {findedItems?.item?.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
