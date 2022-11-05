import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useApi(url, metodo, token, jsonParams) {
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
  console.log("token" + token);

  useEffect(() => {
    (async () => {
      //* se trae el token del local storage

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
