import React from "react";

export const chosenGame=(value)=>{
  if(value===1){
   return({
     dice:{
       1:<img className="dice1" src={require('../assets/Images/dice-1.png')} alt=""></img>,
       2:<img className="dice1" src={require('../assets/Images/dice-2.png')} alt=""></img>,
       3:<img className="dice1" src={require('../assets/Images/dice-3.png')} alt=""></img>,
       4:<img className="dice1" src={require('../assets/Images/dice-4.png')} alt=""></img>,
       5:<img className="dice1" src={require('../assets/Images/dice-5.png')} alt=""></img>,
       6:<img className="dice1" src={require('../assets/Images/dice-6.png')} alt=""></img>,
     },
     currentPlayer:1,
     1:{
         score:0,
         globalScore:0,
         rounds:0,
         win:false
     },
     2:{
        score:0,
        globalScore:0,
        rounds:0,
        win:false
    },
    finalScore:0,
    finalScoreR:0,
    diceValues:[1,1],
    aiIsOn:false,
    race:false,
    basic:true,
    })
  }
}