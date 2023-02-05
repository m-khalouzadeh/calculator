import React, { useState } from "react";
import "./calculator_style.css";

const MycalCulator = () => {

    const[num1,setnum1]=useState("");
    const[num2,setnum2]=useState("");


    const number_click=(e)=>{
       
      setnum1(num1+''+e.target.value);

    }

  return (
    <div>
      <div className="mybox">
        <input className="myinput" value={num1}></input>
        <br></br>
        <button className="mybtn" value={1} onClick={number_click}>1</button>
        <button className="mybtn" value={2} onClick={number_click}>2</button>
        <button className="mybtn">3</button>
        <br></br>

        <button className="mybtn">4</button>
        <button className="mybtn">5</button>
        <button className="mybtn">6</button>
        <br></br>
        <button className="mybtn">7</button>
        <button className="mybtn">8</button>
        <button className="mybtn">9</button>
      </div>
    </div>
  );
};

export default MycalCulator;
