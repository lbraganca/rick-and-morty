import { useState, useEffect } from "react";
import axios from "axios";

const API_HOST = process.env.REACT_APP_SERVER_HOST;

const useFetch = (method, resource, params) => {
  method = method.toLowerCase();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const host = `${API_HOST}/${resource}`;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const { data } = await axios[method](host, params);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [method, host, params]);

  return { data, isLoading, error };
};

export default useFetch;
