import React, { useState } from 'react'

const AddingValues = () => {
    const[number,setnumber]=useState(0)

const [textcolor, setColor] = useState("pink");


const addValues =()=>{
     setnumber( number + 1);
    // console.log(number)
    // document.getElementById('result').innerHTML += ` item is ${number}  <br>`;

}
const changeColorV2 = () => {
    setColor("green");
    setColor("blue");
    setColor("red");
   
  };

  
  return (
    <div>

        <button onClick={addValues}>Add values</button>
        <h2 id="result">AddingValues {number}</h2>

        <button onClick={changeColorV2}>Change Multiple</button>
        <h2>{number}</h2>
      <h1 style={{ color: textcolor }}> I am {textcolor}</h1>
    </div>
  )
}

export default AddingValues


// import React, { useState } from 'react';

// const colors = ['green', 'blue', 'red',"orange"];

// const fontSizee=["25px","30px", "35px","40px"]

// const ColorChanger = () => {


//   const [Index, setIndex] = useState(0);
//   const [changeFont, setchangeFont] = useState(0);

//   const changeColor = () => {
//     const nextIndex = (Index + 1) % colors.length;
//     const updation =(changeFont +1) %  fontSizee.length;

//     // console.log("-=-=-=-=-=-=-=-=>",(Index + 1) % colors.length)
//     setIndex(nextIndex);
//     setchangeFont(updation)
//   };

//   return (
//     <div>
//       <button onClick={changeColor}>Change Color</button>
//       <h1 style={{ backgroundColor: colors[Index], fontSize:fontSizee[changeFont] }}>I am {colors[Index]}</h1>
//     </div>
//   );
// };

// export default ColorChanger;