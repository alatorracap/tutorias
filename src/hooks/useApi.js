import { useEffect, useState } from "react";

function useApi(url, metodo) {
  console.log("metodo", metodo);
  console.log("url", url);
  const [data, setData] = useState();

  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAAAAA");
    (async () => {
      //const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDc4ODU2NCwiZXhwIjoxNjY0ODc0OTY0fQ.rQ3DI1IxtXNpX9V-vE1R9hwboJImngl-uE8BYhPMd10";
      const res = await fetch(url, {
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
