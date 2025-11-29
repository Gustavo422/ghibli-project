"use client";
import { useEffect, useState } from "react";

export default function useSearch(term) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const MIN_LOADING = 400;

    if (!term) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData([]);
      setLoading(false);
      setError(false);
      return;
    }
    setLoading(true);
    const controller = new AbortController();
    const delay = new Promise((res) => setTimeout(res, MIN_LOADING));

    const fetchPromise = fetch(
      `/api/search?query=${encodeURIComponent(term)}`,
      {
        signal: controller.signal,
      },
    ).then((res) => res.json());

    Promise.all([fetchPromise, delay])
      .then(([data]) => setData(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(true);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [term]);

  return { data, loading, error };
}
