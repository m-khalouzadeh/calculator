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
      if(num1=='') return
      if(num2!='')
      {
        let c=compute();
        setnum2(c);
      }
      else
      {
        setnum2(num1);
      }
        
        setnum1("");
        setop(e.target.value);
  
      }

      const equal_click=(e)=>{
      
        setnum1(compute());
        setnum2("");
       setop('');
  
      }

      const compute=(e)=>{
      let x=parseInt(num1);
      let y=parseInt(num2)
        switch(op)
      {
        case '+': return x+y; break;
        case '-': return y-x; break;
        case '*': return x*y; break;
        case '/': return y/x; break;

      }
  
      }



  return (
    <div>
      <div className="mybox">
      <input className="myinput" value={num2}></input>
        <input className="myinput" value={num1}></input>
        <br></br>
        <button className="mybtn" value={1} onClick={number_click}>1</button>
        <button className="mybtn" value={2} onClick={number_click}>2</button>
        <button className="mybtn" value={3} onClick={number_click}>3</button>
        <button className="mybtn" value={'+'} onClick={op_click}>+</button>
        <br></br>

        <button className="mybtn" value={4} onClick={number_click}>4</button>
        <button className="mybtn" value={5} onClick={number_click}>5</button>
        <button className="mybtn" value={6} onClick={number_click}>6</button>
        <button className="mybtn" value={'-'} onClick={op_click}>-</button>
        <br></br>
        <button className="mybtn" value={7} onClick={number_click}>7</button>
        <button className="mybtn" value={8} onClick={number_click}>8</button>
        <button className="mybtn" value={9} onClick={number_click}>9</button>
        <button className="mybtn" value={'='} onClick={equal_click}>=</button>
      </div>
    </div>
  );
};

export default MycalCulator;
