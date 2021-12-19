import React from "react";
import '../../utils/utitlties.css'
import './input.css'
const RoundInput=({roundValue,callback,game})=>{
    console.log(roundValue);
  return(
      <div className="ui input focus">
          {game? <input type="number"
             value={roundValue}
             onChange={(e)=>callback(e.target.value)}
             disabled={false}
           />:<></>}
      </div>
  );
}
export default RoundInput;