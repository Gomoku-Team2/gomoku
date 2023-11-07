import styled from 'styled-components'
import PropTypes from 'prop-types'

function WinnerMessage({ winner, resetGame }) {
  WinnerMessage.propTypes = {
    winner: PropTypes.string.isRequired, // Assuming winner is a string
    resetGame: PropTypes.func.isRequired
  }

  return (
    <Overlay>
      <WinnerMsg>
        <h2>{`Winner!`}</h2>
        <h3>{winner}</h3>
        <button onClick={resetGame}>PLAY AGAIN</button>
      </WinnerMsg>
    </Overlay>
  )
}

export default WinnerMessage

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
`

const WinnerMsg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 800px;
  border-radius: 20px;
  z-index: 9999;

  h2 {
    margin: 0;
    font-family: 'Permanent Marker', cursive;
    font-size: 50px;
    color: #0ae167;
    font-weight: 100;
  }

  h3 {
    margin: 0;
    font-family: 'Permanent Marker', cursive;
    font-size: 40px;
    color: #ffffff;
    font-weight: 100;
  }
  button {
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid black;
    font-family: 'Permanent Marker', cursive;
    font-size: 20px;
    margin-top: 30px;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 30px;
    }
  }
`
