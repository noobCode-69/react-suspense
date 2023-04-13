import React from "react";
import { useQuery } from "react-query";

function Component2() {
  const { data } = useQuery(["data2"], async () => {
    let data = await fetch("https://catfact.ninja/fact");
    data = await data.json();
    return data.length;
  });

  return <div>DATA2 : {data}</div>;
}

export default Component2;
