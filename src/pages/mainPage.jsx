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
    buttons="buttons";
    // this function is to control plyer info and points
    playerController(player, sum, round, win) {
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
        let temp = chosenGame(1);
        this.setState({ ...temp })
    }


    rollDice = () => {
        // here we give random dice
        let dice = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)]
        this.setState({ diceValues: dice });
        // here we change the player points
        let sum = dice[0] + dice[1];
        if (this.state[this.state.currentPlayer].rounds > 0) {
            this.playerController(this.state.currentPlayer, sum, -1, false)

            this.setState({ finalScore: this.state.finalScore - 1 });

        }
        /// here we change the player role
        let changePlayer = this.state.currentPlayer === 1 ? 2 : 1;
        this.setState({ currentPlayer: changePlayer });
        this.state.basic?this.checkWinner():this.checkWinnerRace(); 

    }


    handleRoundNumbers = (value) => {
        if (value >= 0) {
            this.setState({ finalScore: value * 2 });
            this.setState({ finalScoreR: value });
            this.players.forEach(element => {
                this.playerController(element, 0, 1, false)
            });

        }
    }

    // this function checks for winner
    checkWinner = () => {
        if (this.state.basic) {
            if (this.state.finalScore === 0) {
                if (this.state[1].globalScore >= this.state[2].globalScore) {
                    this.playerController(1, 0, 0, true)
                }
                else {
                    this.playerController(2, 0, 0, true)
                }

            }
        }
    }
    checkWinnerRace=()=>{
            if (this.state[1].globalScore >= this.state.finalScore &&this.state.finalScore>0) {
                this.playerController(1, 0, 0, true)
            }
            if (this.state[2].globalScore >= this.state.finalScore &&this.state.finalScore>0) {
                this.playerController(2, 0, 0, true)
            }
            
        }


    // in this function we activate the AI
    handleAi = () => {
        this.setState({ aiIsOn: !this.state.aiIsOn })
    }
    // in this function we activate The Game We Want
    handleGame = () => {
        console.log('dsfa')
        this.setState({ basic: !this.state.basic })
        this.setState({ race: !this.state.race })
        this.setState({ finalScore: 100 })
        this.playerController(1, 0, 100, false);
        this.playerController(2, 0, 100, false)
        this.buttons='buttons1'
    }
    // in this function we activate the AI


    componentDidUpdate() {
        if (this.state.aiIsOn && this.state.currentPlayer === 1) {
            setTimeout(this.rollDice(), 1000)
        }
    }
    displayWinnerScreen(){
        if(this.state[1].win||this.state[1].win ){
            return false;
        }
        return true
    }







    render() {


        return (

            <div className='flexing-center'>
                {this.displayWinnerScreen()?
                <>{this.players.map((player) => {
                    return <Player player={player} score={this.state[player].score}
                        globalScore={this.state[player].globalScore} key={player}
                        showDot={this.state.currentPlayer === player ? true : false}
                        rounds={this.state[player].rounds}
                        win={this.state[player].win}
                        game={this.state.basic}
                    />
                })}</>:<></>}

                <div className={`${this.buttons} flexing-center col-direction`}>
                    <ButtonGame logo={<i className="fas fa-plus-circle"></i>}
                        text="NEW GAME"
                        callBack={this.newGame} />
                    <Dice value1={this.state.diceValues[0]}
                        value2={this.state.diceValues[1]}
                        imagesDiceObject={this.state.dice} />
                    <ButtonGame logo={<i className="fas fa-sync"></i>}
                        text="ROLL DICE"
                        callBack={this.rollDice} />
                    <RoundInput roundValue={this.state.finalScoreR}
                        callback={this.handleRoundNumbers} game={this.state.basic} />
                    <AiOn checked={this.state.aiIsOn} callback={this.handleAi} text='Turn ON Ai' />
                    <ButtonGame logo={<i className="fab fa-adn"></i>} callBack={()=>this.handleGame()} text='Basic Game' />
                    <ButtonGame logo={<i className="fab fa-ravelry"></i>} callBack={()=>this.handleGame()} text='Race Game' />
                </div>

            </div>






        )
    }


}
export default MainPage;