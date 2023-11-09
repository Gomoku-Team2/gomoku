// import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';

function ScoreBoardData({ scores }) {

  ScoreBoardData.propTypes = {
    scores: PropTypes.shape({
      player1: PropTypes.number.isRequired,
      player2: PropTypes.number.isRequired,
    }).isRequired,
  };

  return (
    <>
    <ScoreBoard>
    {scores.player1} - {scores.player2}
    </ScoreBoard>
    </>
  )
}

export default ScoreBoardData

const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: "Osaka-sans-serif";

@media only screen and (max-width: 428px) { /* Adjust max-width as needed for iPhone 12 Pro */
    font-size: 28px; /* Font size for mobile views */
}
`
