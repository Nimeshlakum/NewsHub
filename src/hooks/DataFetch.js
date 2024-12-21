import { useState, useEffect, useContext } from 'react';
import DataContext from "../context/DataContext"

const API_KEY = import.meta.env.VITE_API_KEY;


const DataFetch = (searchTerm) => {
    const { setdata } = useContext(DataContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const apiUrl = `https://newsapi.org/v2/top-headlines?country=${searchTerm}&apiKey=${API_KEY}`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setdata(result.articles);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    return { loading, error };
};

export default DataFetch;
