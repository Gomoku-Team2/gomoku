// import React from 'react'
import styled from 'styled-components'
import BoardData from './BoardData'
import GameRules from './GameRules';
import PropTypes from 'prop-types';

function BoardModal({ updateScores, currentPlayer, handleCurrentPlayer }) {

  BoardModal.propTypes = {
    updateScores: PropTypes.func.isRequired, // expects a function
    currentPlayer: PropTypes.func.isRequired,
    handleCurrentPlayer: PropTypes.func.isRequired
  };

  return (
    <>

<BoardShadow>
  <div className='board-data'>
  <BoardData updateScores={updateScores} currentPlayer={currentPlayer} handleCurrentPlayer={handleCurrentPlayer}/>
  </div>
  <GameRules />
</BoardShadow>
    </>
  )
}

export default BoardModal

const BoardShadow = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100%;
max-width: 800px;
height: 850px;
border-radius: 50px;
background: rgba(0, 0, 0, 0.34);
margin-bottom: 20px;

.board-data {
width: 100%;
}

@media only screen and (max-width: 500px) {
    height: 450px;
    border-radius: 0;
  }
`
