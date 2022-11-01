import { useEffect, useState } from "react";

function useApi(url, metodo, jsonParams) {
  console.log("metodo", metodo);
  console.log("url", url);
  const [data, setData] = useState();

  let newUrl = url;

  // Add to URL jsonParams object if not undefined
  if (jsonParams !== undefined) {
    const new_params = new URLSearchParams([
      ...Object.entries(jsonParams), // [["c","a"],["d","2"],["e","false"]]
    ]).toString();

    newUrl = new URL(`${url}?${new_params}`);
  }

  console.log(newUrl);

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAAAAA");
    (async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDc4ODU2NCwiZXhwIjoxNjY0ODc0OTY0fQ.rQ3DI1IxtXNpX9V-vE1R9hwboJImngl-uE8BYhPMd10";
      const res = await fetch(newUrl, {
        headers: { Authorization: token },
        method: metodo,
      });
      console.log("res", res);
      if (res.status === 401) {
        console.log("res.status", res.status);
        console.log("ERRORRRR");
      } else {
        const data = await res.json();
        setData(data);
        console.log("data", data);
      }
    })();
  }, [url, metodo]);

  return data;
}

export default useApi;
