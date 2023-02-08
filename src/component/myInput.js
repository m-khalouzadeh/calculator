import React, { useState } from "react";
import "./calculator_style.css";


 const MyInput=(props)=>{
 
    return(
        <input className='myinput' value={props.num}></input>
    )

}
export default MyInput;