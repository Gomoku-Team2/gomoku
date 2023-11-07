import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function GameRules() {

const [showRules, setShowRules]= useState(false);

console.log(showRules)

  return (
    <GameRulesContainer styleShowRules={showRules}>
        <ButtonContainer>
        <RulesButton onClick={()=> {setShowRules(!showRules)}}>Rules <FontAwesomeIcon icon={faChevronDown}  style={{color: "#f7f7f8",}} />
 </RulesButton>
     </ButtonContainer>
        {showRules &&
        <RulesContainer >
            <Rules>Gomoku is a two-player game on a 19x19 grid.
                <br /> The objective is to create a line of five stones in a row. Either horisontellt, vertikalt or diagonalt.<br />
                <br />Players take turns placing stones until one player achieves five in a row or the board is full.</Rules>
        </RulesContainer>
        }
    </GameRulesContainer>
  )
}
const GameRulesContainer=styled.div`
@media (max-width: 400px){
    position: fixed;
    top: 0;
    left: 200px;
  width: 100%;
  height: 48%;
  border-radius: 10px;
  background: ${props => (props.styleShowRules? "rgba(0, 0, 0, 0.8)": "none")}
}
`

const RulesButton= styled.button `
color: white;
background-color: #ff000048;
padding: 10px 20px;
border-radius: 10px;
font-size: 16px;
cursor: pointer;
&:hover {
    background-color: #d41f1f83;
}
@media (max-width: 400px) {
    padding: 5px 10px;
    font-size: 14px

  }
`

const ButtonContainer= styled.div `
position: absolute;
top: 135px;
margin-left: 30px;
box-shadow: 2px 2px #ffffffbe;
border-radius: 10px;

@media (max-width: 400px) {
    position: fixed;
    left: 270px;
    top: 10px
  }
`
const RulesContainer= styled.div`
position: absolute;
top: 210px;
border: 1px solid grey;
padding: 10px;
width: 180px;
height: 300px;
border-radius: 10px;
background-color: #ff000018;
box-shadow: 2px 2px #ffffffa9;
@media (max-width: 400px) {
    position: fixed;
    left: 200px;
    top: 90px

  }
`

const Rules= styled.div`
color: white;
line-height: 22px;
`

export default GameRules
