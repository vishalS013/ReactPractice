import React, { useState } from "react";

const PostHeader = () => {
  const [newname, setNewname] = useState({ title: " ", tags: " " });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewname({ ...newname, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("hhttp://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newname), //req
      });

      const JsonData = await response.json();
      setNewname(JsonData);
      console.log(JsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default PostHeader;
