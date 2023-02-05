import React, { useState } from "react";
import "./calculator_style.css";

const MycalCulator = () => {

    const [op,setop]=useState("");
    const[num1,setnum1]=useState("");
    const[num2,setnum2]=useState("");

    const[finalnum1,setfinalnum1]=useState("");
    const[finalnum2,setfinalnum2]=useState("");

    const number_click=(e)=>{
      
      setnum1(num1+''+e.target.value);

    }

    const op_click=(e)=>{
      
        setfinalnum1(num1);
        setnum1("");
        setop(e.target.value);
  
      }

      const equal_click=(e)=>{
      
        setfinalnum2(num2);
        setnum2("");
       if(op=="+")
       {setnum1(finalnum1+finalnum2);}
  
      }

  return (
    <div>
      <div className="mybox">
      <input className="myinput" value={finalnum1+''+op}></input>
        <input className="myinput" value={num1}></input>
        <br></br>
        <button className="mybtn" value={1} onClick={number_click}>1</button>
        <button className="mybtn" value={2} onClick={number_click}>2</button>
        <button className="mybtn" value={3} onClick={number_click}>3</button>
        <button className="mybtn" value={'+'} onClick={op_click}>+</button>
        <br></br>

        <button className="mybtn">4</button>
        <button className="mybtn">5</button>
        <button className="mybtn">6</button>
        <button className="mybtn" value={'='} onClick={equal_click}>=</button>
        <br></br>
        <button className="mybtn">7</button>
        <button className="mybtn">8</button>
        <button className="mybtn">9</button>
      </div>
    </div>
  );
};

export default MycalCulator;
