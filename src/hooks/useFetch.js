import { useState, useEffect } from "react";
import axios from "axios";

const API_HOST = process.env.REACT_APP_SERVER_HOST;

const useFetch = (method = "get", resource, params) => {
  method = method.toLowerCase();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const host = `${API_HOST}/${resource}`;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await axios[method](host, params);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [method, host, params]);

  return { data, isLoading, error };
};

export default useFetch;
