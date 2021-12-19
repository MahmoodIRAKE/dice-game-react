import React from "react";

const AiOn=({checked,callback,text})=>{
    let color=checked?'red':'';
 return(
     <div className="ui input flexing-center space">
         <button onClick={()=>callback()} style={{backgroundColor:color}}>{text}</button>
     </div>
 );
}
export default AiOn