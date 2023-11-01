// import React from 'react'
import styled from 'styled-components'
import BoardData from './BoardData'

function BoardModal() {
  return (
    <>
<BoardShadow>
<BoardData/>
</BoardShadow>
    </>
  )
}

export default BoardModal

const BoardShadow = styled.div `
width: 100%;
max-width: 700px;
height: 700px;
border-radius: 50px;
background: rgba(0, 0, 0, 0.34);
/* flex-shrink: 1; */
/* padding: 50px; */
`
