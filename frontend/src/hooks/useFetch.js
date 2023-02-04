import { useEffect, useState } from "react";

const useFetch = (url, url2) => {
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); //Reset

            try {
                const res = await fetch(url);
                const res2 = await fetch(url2)
                const json = await res.json();
                const json2 = await res2.json();

                setData(json);
                setData2(json2);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [url, url2])

    return { loading, error, data, data2 }
}

export default useFetch;