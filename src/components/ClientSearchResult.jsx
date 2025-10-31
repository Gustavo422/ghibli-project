"use client";
import SearchSkeleton from "@/components/SearchSkeleton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientSearchResult({ term }) {
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
    return <p className="text-base text-red-600">Someting went wrong..</p>;
  }
  if (loading) {
    return (
      <>
        <SearchSkeleton />
        <SearchSkeleton />
        <SearchSkeleton />
      </>
    );
  }

  if (!loading && data.length === 0 && term) {
    return <></>;
  }
  if (!loading && data.length > 0) {
    return (
      <div className="m-0 flex flex-col overflow-hidden rounded-md border border-slate-600 bg-slate-950/70 p-0">
        {data.map((findedItems, i) => (
          <div key={i} className="flex flex-col">
            <Link
              href={`/films/${findedItems?.item?.id}`}
              className="flex hover:bg-black/50"
            >
              <div className="relative aspect-2/3 h-[78px] w-14 object-cover">
                <Image
                  fill
                  alt="Image of Film search"
                  src={findedItems?.item?.image}
                  className="border-r border-slate-600 object-cover"
                />
              </div>
              <div className="h-full w-full flex-col pr-2">
                <div className="m-0 p-0 pl-3 text-xl">
                  {findedItems?.item?.title}
                </div>
                <div className="m-0 line-clamp-2 p-0 pl-3">
                  {findedItems?.item?.description}
                </div>
              </div>
            </Link>
            {i < data.length - 1 && (
              <hr className="w-full border-t border-gray-600" />
            )}
          </div>
        ))}
      </div>
    );
  }
}
