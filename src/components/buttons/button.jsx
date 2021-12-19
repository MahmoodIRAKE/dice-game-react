import React from "react";
import '../../utils/utitlties.css'
import './button.css'
const ButtonGame=({logo,text,callBack})=>{
return(
    <div className="flexing-center btn-container" onClick={()=>callBack()}>
       <div className="flexing-center btn">
         {logo}
          <p>{text}</p>
       </div>
        
    </div>
);
}
export default ButtonGame;