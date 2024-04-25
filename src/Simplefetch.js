import axios from "axios";
import React, { useEffect, useState } from "react";

const Simplefetch = () => {
  //GET
  const [data, setData] = useState([]);

  //Post method
  const [newname, setNewname] = useState({ title: " ", tags: " " });

  // in this way we are getting an api then this give as promise or usko resolve krne ke liye uske response ko store krwa diya setData mai

  //GET method
  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => setData(res.data));
    console.log("-=-=-=-=> getting data from url");
  };

  // in this way apa us getdata nu call kr reha
  useEffect(() => {
    getData();
    console.log("-=-=->, displaying data via useEffect");
  }, []);

  // eh tarreke naal apa jo value change houngi input field to apa store krwa rhe setnewName vich
  //Post method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewname({ ...newname, [name]: value });
  };

  // eh apna jdo oho us button te click hounga oh data apna store ho jaunga previous data vich.
  const handleSubmit = (res) => {
    axios
      .post("http://localhost:3001/posts", newname)
      .then((res) => console.log("value stored -=-=-=-=->", res.data));
  };

  return (
    <div>
      <h1>getting Data</h1>
      <input
        type="text"
        name="title"
        value={newname.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="tags"
        value={newname.tags}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      {data.map((curval, index) => {
        return (
          <h1 key={index}>
            {curval.title}
            {curval.tags}
          </h1>
        );
      })}
    </div>
  );
};

export default Simplefetch;
