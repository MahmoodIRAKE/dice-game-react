import React from "react";
import Player from "../components/player/player";
import ButtonGame from "../components/buttons/button";
import RoundInput from "../components/input/roundsInput";
import { chosenGame } from "../modules/module";
import './style.css'
import '../utils/utitlties.css'
import Dice from "../components/dice/dice";
import AiOn from "../components/input/aiCheck";
class MainPage extends React.Component {
    state = chosenGame(1);
    players = [1, 2];

    // this function is to control plyer info and points
    playerController(player,sum,round,win){
        this.setState({
            [player]: {
                score: sum
                , globalScore: this.state[this.state.currentPlayer].globalScore + sum,
                rounds: this.state[this.state.currentPlayer].rounds + round,
                win: win
            }
        });
    }
    // function to restart the game 
    newGame = () => {
        let temp=chosenGame(1);
        this.setState({...temp})
    }


    rollDice = () => {
         // here we give random dice
        let dice = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)]
        this.setState({ diceValues: dice });
        // here we change the player points
        let sum = dice[0] + dice[1];
        if (this.state[this.state.currentPlayer].rounds > 0) {
            this.playerController(this.state.currentPlayer,sum,-1,false)
        }
        this.setState({ finalScore: this.state.finalScore - 1 });
        /// here we change the player role
        let changePlayer = this.state.currentPlayer === 1 ? 2 : 1;
        this.setState({ currentPlayer: changePlayer });
        this.checkWinner();


    }


    handleRoundNumbers = (value) => {
        if (value >= 0) {
            this.setState({ finalScore: value * 2 });
            this.players.forEach(element => {
                this.playerController(element,0,+value,false)
            });

        }
    }

    // this function checks for winner
    checkWinner = () => {
        if (this.state.finalScore === 0) {
            if (this.state[1].globalScore >= this.state[2].globalScore) {
                this.playerController(1,0,0,true)
            }
            else {
                this.playerController(2,0,0,true)
            }

        }
    }
    
    // in this function we activate the AI
    handleAi=()=>{
        this.setState({aiIsOn:!this.state.aiIsOn})
    }
componentDidUpdate(){
    if(this.state.aiIsOn&&this.state.currentPlayer===1){
        this.rollDice();
    } 
}







    render() {
            

        return (

            <div className='flexing-center'>
                {this.players.map((player) => {
                    return <Player player={player} score={this.state[player].score}
                        globalScore={this.state[player].globalScore} key={player}
                        showDot={this.state.currentPlayer === player ? true : false}
                        rounds={this.state[player].rounds}
                        win={this.state[player].win}
                    />
                })}

                <div className="buttons flexing-center col-direction">
                    <ButtonGame logo={<i className="fas fa-plus-circle"></i>}
                     text="NEW GAME" 
                     callBack={this.newGame} />
                    <Dice value1={this.state.diceValues[0]} 
                    value2={this.state.diceValues[1]}
                     imagesDiceObject={this.state.dice} />
                    <ButtonGame logo={<i className="fas fa-sync"></i>}
                     text="ROLL DICE"
                     callBack={this.rollDice} />
                    <RoundInput roundValue={this.state.finalScore / 2}
                     callback={this.handleRoundNumbers} />
                     <AiOn checked={false} callback={()=>console.log("asf")}/>
                </div>

            </div>






        )
    }


}
export default MainPage;