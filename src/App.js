import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    console.log("check useeffect");
    fetch(url)
      .then((resp) => resp.json())
      .then((d) => setData(d));
  },[]);

  return (
    <div>
      {data.map((item, index) => {
        return (
          console.log("-=-=--->", item, index),
          (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
            </div>
          )
        );
      })}
    </div>
  );
};

export default App;
