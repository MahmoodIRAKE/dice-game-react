import React from "react";
import RedScoreBox from "./currentRedScoreBox";
import '../../utils/utitlties.css'
import './player.css'
import PlayerName from "./playerName";

const Player=({player,score,globalScore,showDot,rounds,win})=>{

 return(
 <div className="flexing-center  col-direction  player">
       {win?<p className="win-text">WINNER</p>:<p className="win-text" style={{color:'#fff'}}>WINNER</p>}
       <p>Rounds To Play: {rounds}</p>
      <PlayerName player={player} score={score} showDot={showDot}/>
      <RedScoreBox score={globalScore}/>
 </div>)

}
export default Player;