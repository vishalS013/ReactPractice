import React, { useEffect } from "react";
import { useState } from "react";

const Fetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    useEffect(() => {
      console.log("check useeffect");
      // {Promises}
      fetch(url, {
        method: "GET", // PUT, GET, DELETE, PATCH
      })
        .then((resp) => resp.json())
        .then((d) => {
          console.log(d);
          setData(d);
        })
        .catch((e) => console.log(e));
      // Async/Await
      // const getData = async () => {
      //   try {
      //     const res = await fetch(url);
      //     const data = await res.json();
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // getData();
    }, []);
  
    const postData = () => {
      fetch(url, {
        method: "POST",
        body: {
          userId: 1,
          id: 101,
          title: "Test",
          body: "eveniet architecto",
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    };
  return (
    <div>

         {data?.map((item, index) => {
        return (
          console.log("-=-=--->", item, index),
          (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          )
        );
      })}
      <button onClick={postData}>Post Data</button>
    </div>
  )
}

export default Fetch