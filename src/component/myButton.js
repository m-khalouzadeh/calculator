import React, { useState } from "react";
import "./calculator_style.css";


 const MyButton=({text,onShow})=>{
 
    return(
        <button className='mybtn'  value={text} onClick={onShow}>{text}</button>
    )

}
export default MyButton;