import { useEffect, useState } from "react";

const DEFAULT_PAGE_SIZE = 100;

const useFetchAll = (baseUrl, options = {}) => {
    const { pageSize = DEFAULT_PAGE_SIZE } = options;
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!baseUrl) {
            setData([]);
            setError(new Error("Missing URL"));
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const fetchAll = async () => {
            setLoading(true);
            try {
                let page = 1;
                let results = [];
                let totalPages = Infinity;

                while (page <= totalPages) {
                    const url = `${baseUrl}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
                    const res = await fetch(url, { signal: controller.signal });
                    if (!res.ok) {
                        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
                    }

                    const dataObject = await res.json();
                    const rawData = dataObject?.data ?? [];
                    const normalized = Array.isArray(rawData)
                        ? rawData.map((item) => [String(item?.id ?? ""), item])
                        : [];

                    results = results.concat(normalized);
                    totalPages = dataObject?.meta?.pagination?.pageCount ?? page;
                    page += 1;
                }

                setData(results);
                setLoading(false);
            } catch (err) {
                if (err?.name !== "AbortError") {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        fetchAll();
        return () => controller.abort();
    }, [baseUrl, pageSize]);

    return { loading, error, data };
};

export default useFetchAll;
