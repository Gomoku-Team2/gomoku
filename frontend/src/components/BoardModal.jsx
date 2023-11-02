// import React from 'react'
import styled from 'styled-components'
import BoardData from './BoardData'
import PropTypes from 'prop-types';

function BoardModal({ updateScores }) {

  BoardModal.propTypes = {
    updateScores: PropTypes.func.isRequired, // expects a function
  };

  return (
    <>
<BoardShadow>
  <div className='board-data'>
  <BoardData updateScores={updateScores}/>
  </div>


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
height: 800px;
border-radius: 50px;
background: rgba(0, 0, 0, 0.34);
margin:10px 0 20px 0;

.board-data {
width: 100%;
}
`
