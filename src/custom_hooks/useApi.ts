import { useEffect, useState } from "react";

interface Options<T> {
  doFetch?: boolean;
  defaultValue?: T | null;
}

export default function useApi<T>(
  service: () => Promise<[T | null, string | null]>,
  { doFetch = true, defaultValue = null }: Options<T> = {},
  dependencies: unknown[] = []
): [T | null, boolean, unknown, () => unknown, any] {
  const [data, setData] = useState<T | null>(defaultValue);
  const [loading, setLoading] = useState(doFetch);
  const [error, setError] = useState("");

  const fetch = async () => {
    setLoading(true);
    try {
      const [response, error] = await service();
      if (error) {
        return setError(error);
      }
      setData(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (doFetch) {
      fetch();
    }
  }, dependencies);

  return [data, loading, error, fetch, setData];
}
