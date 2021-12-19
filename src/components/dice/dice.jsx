import React from "react";
import './dice.css'
const Dice=({callBack,value1,value2,imagesDiceObject})=>{
    
  
   return(
       <div className="flexing-center col-direction ">
           {imagesDiceObject[value1]} 
           {imagesDiceObject[value2]}
       </div>
   )

}
export default Dice;