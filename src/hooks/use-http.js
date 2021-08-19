import { useState } from "react";


const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [didSubmit, setDidSubmit] = useState(false);

  const fetchData = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(undefined);
    setDidSubmit(false);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
    setDidSubmit(true);
  };

  return {
    isLoading,
    error,
    didSubmit,
    fetchData,
  };
};

export default useHttp;
