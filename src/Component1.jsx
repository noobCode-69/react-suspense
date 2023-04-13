import React from "react";
import { useQuery } from "react-query";

function Component1() {
  const { data } = useQuery(["data1"], async () => {
    let data = await fetch("https://api.publicapis.org/entries");
    data = await data.json();
    return data.count;
  });

  return <div>DATA1: {data}</div>;
}

export default Component1;
