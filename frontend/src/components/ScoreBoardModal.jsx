import styled from "styled-components"
import ScoreBoardData from "./ScoreBoardData"

function ScoreBoardModal() {
  return (
    <>
      <Wrapper>
        <ScoreBoardData />
      </Wrapper>
    </>
  )
}

export default ScoreBoardModal

const Wrapper = styled.div`
  height: 170px;
  width: 300px;
  max-width: 400px;
  margin-top: 15px;
  margin-bottom: 0px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.34);
`
