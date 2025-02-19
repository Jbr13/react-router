import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [productId, setProductId] = useState(null);
  // error handling
  const [error, setError] = useState(null);

  // Loading
  const [loading, setLoading] = useState(false);

  async function httpConfig(data, method) {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setMethod(method);
      setConfig({ method, headers: { "Content-Type": "application/json" } });
      setProductId(data);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
        setError("Houve algum erro para carregar os dados");
      }

      setLoading(false);
    }

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    async function httRequest() {
      let fetchOptions = productId
        ? [`${url}/${productId}`, config]
        : [url, config];

      console.log(fetchOptions);

      const res = await fetch(...fetchOptions);

      const json = await res.json();

      setCallFetch(json);
      setProductId(null);
    }

    httRequest();
  }, [config, method]);

  return { data, httpConfig, loading, error };
};
