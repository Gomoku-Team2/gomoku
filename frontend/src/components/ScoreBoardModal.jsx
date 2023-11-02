import styled from "styled-components"
import ScoreBoardData from "./ScoreBoardData"
import UserHandler from './UserHandler'
function ScoreBoardModal() {
  return (
    <>
      <Wrapper>
         <UserHandler />
        <ScoreBoardData />
      </Wrapper>
    </>
  )
}

export default ScoreBoardModal

const Wrapper = styled.div`
  height: 200px;
  width: 600px;
 // max-width: 400px;
  margin-top: 15px;
  margin-bottom: 0px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.34);
`
