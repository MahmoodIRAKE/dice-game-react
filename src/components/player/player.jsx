import React from "react";
import RedScoreBox from "./currentRedScoreBox";
import Race from "../race/sliderCar";
import '../../utils/utitlties.css'
import './player.css'
import PlayerName from "./playerName";

const Player=({player,score,globalScore,showDot,rounds,win,game})=>{
 let bColor='#fff'
 if(showDot){
       bColor='rgb(211, 209, 209)'
 }
 return(
 <div className="flexing-center  col-direction  player" style={{backgroundColor:bColor}}>
        {game?<></>:<Race score={globalScore}/>}
       {win?<p className="win-text">WINNER</p>:<p className="win-text" style={{color:'#fff'}}>--------</p>}
       {game?<p>Rounds To Play: {rounds}</p>:<></>}
      <PlayerName player={player} score={score} showDot={showDot} />
      {game?<RedScoreBox score={globalScore}/>:<></>}
 </div>)

}
export default Player;