import React, { useState } from "react";
import "./calculator_style.css";
import MyButton from './myButton';
import MyInput from './myInput';

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

  const onAcClick=()=>{
    setnum1("");
    setnum2("");
    setop("");
  }


  return (
    <div className="main_div">
      <span style={{border:"1px solid", width: "222px", margin:" 5px", backgroundColor:"white"}}>
        
        <MyInput num={num2}></MyInput>
        <MyInput num={num1}></MyInput>
        
      </span>
      <span>
        
        <MyButton text='1' value={1} onShow={onNumberClick}></MyButton>
        <MyButton text='2' value={2} onShow={onNumberClick}></MyButton>
        <MyButton text='3' value={3} onShow={onNumberClick}></MyButton>
        <button className='mybtn opbtn' id="plus" value={'+'} onClick={onOpClick}>+</button>
      </span>
      <span>
      <MyButton text='4' value={4} onShow={onNumberClick}></MyButton>
      <MyButton text='5' value={5} onShow={onNumberClick}></MyButton>
      <MyButton text='6' value={6} onShow={onNumberClick}></MyButton>
        <button className='mybtn opbtn' id="mines" value={"-"} onClick={onOpClick}>-</button>
      </span>
      <span>
      <MyButton text='7' value={7} onShow={onNumberClick}></MyButton>
      <MyButton text='8' value={8} onShow={onNumberClick}></MyButton>
      <MyButton text='9' value={9} onShow={onNumberClick}></MyButton>
        <button className='mybtn opbtn' id="mult" value={"*"} onClick={onOpClick}>x</button>
      </span>
      <span>
      <button className='mybtn ac_btn' id="ac" value={"ac"} onClick={onAcClick}>AC</button>
      <MyButton text='0' value={0} onShow={onNumberClick}></MyButton>
        <button className=' mybtn btn_equal' id="eq" value={"="} onClick={equal_click}>=</button>
        <button className='mybtn opbtn' id="divide" value={"/"} onClick={onOpClick}>/</button>

      </span>
    </div>
  );
};

export default MycalCulator;
