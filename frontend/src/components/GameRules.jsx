import { useState } from 'react'
import styled from 'styled-components'



function GameRules() {

const [showRules, setShowRules]= useState(false);

  return (
    <GameRulesContainer>
        <ButtonContainer>
        <RulesButton onClick={()=> {setShowRules(!showRules)}}>Rules
 </RulesButton>
     </ButtonContainer>
        {showRules &&
        <RulesContainer >
            <Rules>Gomoku is a two-player game on a 19x19 grid.
                <br /> The objective is to create a line of five stones in a row.<br />
                <br />Players take turns placing stones until one player achieves five in a row or the board is full.</Rules>
        </RulesContainer>
        }
    </GameRulesContainer>
  )
}
const GameRulesContainer=styled.div`
`

const RulesButton= styled.button `
color: white;
background-color: #ff000048;
padding: 10px 30px;
border-radius: 10px;
font-size: 16px;
cursor: pointer;

`
const ButtonContainer= styled.div `
position: absolute;
top: 135px;
margin-left: 30px;
box-shadow: 2px 2px #ffffffbe;
border-radius: 10px;
`
const RulesContainer= styled.div`
position: absolute;
top: 210px;
border: 1px solid grey;
padding: 10px;
width: 180px;
height: 250px;
border-radius: 10px;
background-color: #ff000018;
box-shadow: 2px 2px #ffffffa9;

`

const Rules= styled.div`
color: white;
line-height: 22px;
`



export default GameRules
