import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log('useEffect');
  useEffect(() => {
    console.log('useEffect');
    const fetchData = async () => {
      console.log('useEffect');
      setLoading(true);
      try {
        console.log('useEffect');
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        console.log('useEffect');
        setError(error);
      }
    };

    fetchData();
  }, []);
  return { response: response, error: error, loading: loading };
};

export default useFetch;
