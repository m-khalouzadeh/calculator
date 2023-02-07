import React, { useState } from "react";
import "./calculator_style.css";

const MycalCulator = () => {

  const [op, setop] = useState("");
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");

  

  const onNumberClick = (e) => {
    setnum1(num1 + '' + e.target.value);

  }

  const onOpClick = (e) => {
    if (num1 == '') return
    if (num2 != '') {
      let c = compute();
      setnum2(c);
    }
    else {
      setnum2(num1);
    }
    setnum1("");
    setop(e.target.value);
  }

  const equal_click = (e) => {

    setnum1(compute());
    setnum2("");
    setop('');

  }

  const compute = (e) => {
    let x = parseInt(num1);
    let y = parseInt(num2)
    switch (op) {
      case '+': return x + y; break;
      case '-': return y - x; break;
      case '*': return x * y; break;
      case '/': return y / x; break;

    }

  }



  return (
    <div style={{ margin: "auto", width: "300px", marginTop: "50px" }}>
      <span style={{border:"1px solid" , width: "126px"}}>
        <input className='myinput' value={num2}></input>
        
        <input className='myinput' value={num1}></input>
      </span>
      <span>
        <button className='mybtn' id="b1" value={1} onClick={onNumberClick}>1</button>
        <button className='mybtn' id="b2" value={2} onClick={onNumberClick}>2</button>
        <button className='mybtn' id="b3" value={3} onClick={onNumberClick}>3</button>
        <button className='mybtn opbtn' id="plus" value={'+'} onClick={onOpClick}>+</button>
      </span>
      <span>
        <button className='mybtn' id="b4" value={4} onClick={onNumberClick}>4</button>
        <button className='mybtn' id="b5" value={5} onClick={onNumberClick}>5</button>
        <button className='mybtn' id="b6" value={6} onClick={onNumberClick}>6</button>
        <button className='mybtn opbtn' id="mines" value={"-"} onClick={onOpClick}>-</button>
      </span>
      <span>
        <button className='mybtn' id="b7" value={7} onClick={onNumberClick}>7</button>
        <button className='mybtn' id="b8" value={8} onClick={onNumberClick}>8</button>
        <button className='mybtn' id="b9" value={9} onClick={onNumberClick}>9</button>
        <button className='mybtn opbtn' id="mult" value={"*"} onClick={onOpClick}>*</button>
      </span>
      <span>
        <button className='mybtn' id="b9" value={9} onClick={onNumberClick}>0</button>
        <button className='btn_equal' id="eq" value={"="} onClick={equal_click}>=</button>
        <button className='mybtn opbtn' id="divide" value={"/"} onClick={onOpClick}>/</button>

      </span>
    </div>
  );
};

export default MycalCulator;
