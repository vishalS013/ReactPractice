import axios from "axios";
import React, { useState } from "react";

const AxiosPut = () => {
  const value = { name: " ", Technology: " " };
  const [data, setData] = useState(value);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <label> Name :</label>
      <input
        type="text"
        placeholder="Enter Your name"
        name="name"
        value={data.name}
        onChange={handlechange}
      />
      <label>Technology</label>
      <input
        type="text"
        placeholder="Enter Your technology"
        name="Technology"
        value={data.Technology}
        onChange={handlechange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AxiosPut;
