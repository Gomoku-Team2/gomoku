import styled from "styled-components"
import ScoreBoardData from "./ScoreBoardData"
import UserHandler from './UserHandler'
import PropTypes from 'prop-types';

function ScoreBoardModal({ scores }) {

  ScoreBoardModal.propTypes = {
    scores: PropTypes.shape({
      player1: PropTypes.number.isRequired,
      player2: PropTypes.number.isRequired,
    }).isRequired,
  };

  return (
    <>
      <Wrapper>
         <UserHandler />
        <ScoreBoardData scores={scores}/>
      </Wrapper>
    </>
  )
}

export default ScoreBoardModal

const Wrapper = styled.div`
display: flex;
flex-direction: column;
  height: 200px;
  width: 600px;
 // max-width: 400px;
  margin-top: 15px;
  margin-bottom: 0px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.34);
`
