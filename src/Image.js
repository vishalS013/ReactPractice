import axios from "axios";
import React, { useState } from "react";

const Image = () => {
  const [image, setImage] = useState([""]);

  const handleChange = (e) => {
    console.log(e.target.files);
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };
  console.log(image, "imagess");

  const handleApi = () => {
    const formData = new FormData();
    formData.append("image", image);

    console.log("234", formData);

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }).then((res) => console.log("Response:", res));
    // axios
    //   .post("http://localhost:3001/posts", formData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("Response:", res);

    //     // // Check if the response contains image data
    //     // if (res.data) {
    //     //   console.log("Image received:", res.data.image);
    //     //   // Handle the image data here
    //     // } else {
    //     //   console.log("No image received");
    //     //   // Handle the case where no image is received
    //     // }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" name="file" onChange={handleChange} />
      <button onClick={handleApi}>Upload Image</button>
      <img src={image} alt="My Image" />;
      {/* {image.map((value, index) => {
      })} */}
    </div>
  );
};

export default Image;
