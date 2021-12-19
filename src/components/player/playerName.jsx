import React from "react";
import '../../utils/utitlties.css'
import './player.css'
const PlayerName=({player,score,showDot,key})=>{
  

 return(
 <div className="flexing-center col-direction player-info">
     <div className="flexing-center space player-name col-direction">
     <p>PLAYER {player}</p>
     {showDot?<div className="red-dot"></div>:<div className="red-dot" style={{backgroundColor:'#fff'}}></div>}
     </div>
     <h1>{score}</h1>
 </div>)

}
export default PlayerName;