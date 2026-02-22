import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) {
            setData([]);
            setError(new Error("Missing URL"));
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
                }

                const dataObject = await res.json();
                const rawData = dataObject?.data;
                let normalized = [];

                if (Array.isArray(rawData)) {
                    normalized = rawData.map((item) => [String(item?.id ?? ""), item]);
                } else if (rawData && typeof rawData === "object") {
                    normalized = [[String(rawData?.id ?? ""), rawData]];
                }

                setData(normalized)
                setLoading(false)
            } catch (error) {
                if (error?.name !== "AbortError") {
                    setError(error)
                    setLoading(false)
                }
            }
        }

        fetchData()
        return () => controller.abort();
    }, [url])

    return { loading, error, data }
}

export default useFetch;
