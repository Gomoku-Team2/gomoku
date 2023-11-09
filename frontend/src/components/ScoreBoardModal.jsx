import styled from "styled-components"
import ScoreBoardData from "./ScoreBoardData"
import UserHandler from './UserHandler'
import PropTypes from 'prop-types';

function ScoreBoardModal({ scores, currentPlayer }) {

  ScoreBoardModal.propTypes = {
    scores: PropTypes.shape({
      player1: PropTypes.number.isRequired,
      player2: PropTypes.number.isRequired,
    }),
    currentPlayer: PropTypes.func.isRequired
  };

  return (
    <>
      <Wrapper>
         <UserHandler currentPlayer={currentPlayer} />
        <ScoreBoardData scores={scores} />
      </Wrapper>
    </>
  )
}

export default ScoreBoardModal

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
  height: 230px;
  /* width: 600px; */
 // max-width: 400px;
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.34);
width: 100%;
max-width: 600px;

@media only screen and (max-width: 428px) { /* Adjust max-width as needed for iPhone 12 Pro */
    height: auto /* Font size for mobile views */
  }
`
