import React from "react";

const AiOn=(checked,callback)=>{
 return(
     <div className="ui input flexing-center space">
         <label >TURN ON AI</label>
         <input type='checkbox' checked={checked} onChange={()=>console.log('sda')}/>
     </div>
 );
}
export default AiOn