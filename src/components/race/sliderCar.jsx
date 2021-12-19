import React from "react";
import './reace.css'
const Race=({score})=>{
 
  return(
     <div className="flexxing-center space">
    
    <input type="range" min="1" max="100" value={score} className="slider" id="myRange" readOnly/>
    <img src={require('../../assets/Images/cup.png')} width='50px' height='40px' />
  </div>
  );
}
export default Race;