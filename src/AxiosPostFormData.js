import axios from "axios";
import React, { useState } from "react";

const AxiosPostFormData = () => {
  const [data, setData] = useState({
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleInputB = (e, ind) => {
    const { name, value } = e.target;
    const updateBatter = [...data.batters.batter]; //const update for bcz hume batter tak phunchna hai , wo ek objects of array hai isliy [...data.batters.batter]
    updateBatter[ind] = { ...updateBatter, [name]: value }; //hum btter tk to phunch gye but wha bhut sari values hai isliy unka index se find krne k liy hume yeh line b likni hai
    setData({ ...data, batters: { batter: updateBatter } }); //set data mei phle hum state mei jayenge ...data.btters then wo ek objects of array hai isliy {} brackets then better: updateBtaetter
  };

  const handleInputT = (e, ind) => {
    const { name, value } = e.target;
    const updatedtopping = [...data.topping];
    updatedtopping[ind] = { ...updatedtopping, [name]: value };
    setData({ ...data, topping: updatedtopping });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/posts";
    const formdata = new FormData();
    formdata.append("id", data.id);
    formdata.append("type", data.type);
    formdata.append("name", data.name);
    formdata.append("ppu", data.ppu);
    data.batters.batter.map((batter, index) => {
      return (
        formdata.append(`batters.batter[${index}].id`, batter.id),
        formdata.append(`batters.batter[${index}].type`, batter.type)
      );
    });
    data.topping.map((topping, index) => {
      return (
        formdata.append(`topping[${index}].id`, topping.id),
        formdata.append(`topping[${index}].type`, topping.type)
      );
    });
    axios
      .post(url, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <div className="main">
        <form>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={data.id}
            placeholder="Enter Id"
            onChange={handleInput}
          />

          <label>Type</label>
          <input
            type="text"
            name="type"
            value={data.type}
            placeholder="Enter type"
            onChange={handleInput}
          />

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter name"
            onChange={handleInput}
          />

          <label>Ppu</label>
          <input
            type="text"
            name="ppu"
            value={data.ppu}
            placeholder="Enter ppu"
            onChange={handleInput}
          />
          <br />

          <label htmlFor="">Batters:</label>
          {data.batters.batter.map((batter, index) => (
            <div key={index}>
              <label>ID:</label>
              <input
                type="text"
                name={`batters.batter[${index}].id`}
                value={batter.id}
                onChange={(e) => handleInputB(e, index)}
              />
              <label>Type:</label>
              <input
                type="text"
                name={`batters.batter[${index}].type`}
                value={batter.type}
                onChange={(e) => handleInputB(e, index)}
              />
            </div>
          ))}
          <br />

          <label htmlFor="trooping">topping</label>
          {data.topping.map((topp, index) => {
            return (
              <div key={index}>
                <label>id</label>
                <input
                  type="text"
                  name={topp.id}
                  value={topp.id}
                  onChange={(e) => handleInputT(e, index)}
                />

                <label>Type</label>
                <input
                  type="text"
                  name={topp.type}
                  value={topp.type}
                  onChange={(e) => handleInputT(e, index)}
                />
              </div>
            );
          })}
        </form>
        <button onClick={handleSubmit}>Submit data</button>
      </div>
    </div>
  );
};

export default AxiosPostFormData;
