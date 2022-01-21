import React, {Component} from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolling: false,
            dice1Value: 1,
            dice2Value: 6,
            totalScore: 7
        };
        this.roll = this.roll.bind(this);
    }

    roll(){
        let dice1Value = Math.floor(Math.random() * 6) + 1;
        let dice2Value = Math.floor(Math.random() * 6) + 1;

        this.setState({isRolling: true});
        setTimeout(() => {
            this.setState({
                isRolling: false,
                dice1Value: dice1Value, 
                dice2Value: dice2Value, 
                totalScore: dice1Value + dice2Value
            });
        }, 1000);
    }

    render(){
        let val1 = this.numToWord(this.state.dice1Value);
        let val2 = this.numToWord(this.state.dice2Value);
        let score = this.state.totalScore;
        return (
            <div className="RollDice">
                <h1 className="RollDice-totalScore">Your Score: {score}</h1>
                <div className="RollDice-container">
                    <Die value={val1}/>
                    <Die value={val2}/>
                </div> 
                <button className="RollDice-button" onClick={this.roll} disabled={this.state.isRolling}>
                    { this.state.isRolling 
                        ? 'Rolling...'
                        : 'Roll Dice'
                    }
                </button>
            </div>
        );
    }

    numToWord(value){
        let words = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'};
        return words[value] ?? 'n/a';
    }
}

export default RollDice;
