import gameData from "../../../backend/src/routes/game.json";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { pinkStone, purpleStone, stoneStyle } from "./Stones";
import PropTypes from "prop-types";
import WinnerMessage from "./WinnerMessage";
import "./stone.css";

function BoardData({ updateScores, currentPlayer, handleCurrentPlayer }) {
  const username1 = localStorage.getItem("Username1");
  const username2 = localStorage.getItem("Username2");
  //const [currentPlayer, setCurrentPlayer] = useState(player);
  const [boardState, setBoardState] = useState(gameData.board.tiles);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [isClickEnabled] = useState(true);
  const resetBoard = gameData.board.tiles.map((row) => Array.from(row).fill(0));
  const [winningPlayer, setWinner] = useState(null);
  const [winningSquares1, setWinningSquares1] = useState([]);
  const [winningSquares2, setWinningSquares2] = useState([]);

  BoardData.propTypes = {
    updateScores: PropTypes.func.isRequired, // expects a function
    currentPlayer: PropTypes.func.isRequired, // expects a function
    handleCurrentPlayer: PropTypes.func.isRequired, // expects a function
  };

  function resetGame() {
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    handleCurrentPlayer(1);
    // setCurrentPlayer(1);
    setWinner(null);

    setBoardState(resetBoard);
  }

  useEffect(() => {
    console.log(winningSquares1, winningSquares2);
  }, []);

  const handleSquareClick = (rowIndex, colIndex) => {
    if (boardState[rowIndex][colIndex] === 0) {
      const updatedBoard = [...boardState];
      updatedBoard[rowIndex][colIndex] = currentPlayer;

      if (currentPlayer === 1) {
        setPlayer1Moves((prevPlayer1Moves) => [
          ...prevPlayer1Moves,
          { row: rowIndex + 1, col: colIndex + 1 },
        ]);
      } else {
        setPlayer2Moves((prevPlayer2Moves) => [
          ...prevPlayer2Moves,
          { row: rowIndex + 1, col: colIndex + 1 },
        ]);
      }

      setBoardState(updatedBoard);
      handleCurrentPlayer(currentPlayer === 1 ? 2 : 1);

      checkForWinner();
    }

    function checkWinCondition(row, col, player) {
      let count = 1;
      for (let i = col - 1; i >= 0 && boardState[row][i] === player; i--) {
        count++;
      }
      for (
        let i = col + 1;
        i < boardState[row].length && boardState[row][i] === player;
        i++
      ) {
        count++;
      }
      if (count >= 5) return true;

      count = 1;
      for (let i = row - 1; i >= 0 && boardState[i][col] === player; i--) {
        count++;
      }
      for (
        let i = row + 1;
        i < boardState.length && boardState[i][col] === player;
        i++
      ) {
        count++;
      }
      if (count >= 5) return true;

      count = 1;
      for (
        let i = row - 1, j = col - 1;
        i >= 0 && j >= 0 && boardState[i][j] === player;
        i--, j--
      ) {
        count++;
      }
      for (
        let i = row + 1, j = col + 1;
        i < boardState.length &&
        j < boardState[row].length &&
        boardState[i][j] === player;
        i++, j++
      ) {
        count++;
      }
      if (count >= 5) return true;

      count = 1;
      for (
        let i = row - 1, j = col + 1;
        i >= 0 && j < boardState[row].length && boardState[i][j] === player;
        i--, j++
      ) {
        count++;
      }
      for (
        let i = row + 1, j = col - 1;
        i < boardState.length && j >= 0 && boardState[i][j] === player;
        i++, j--
      ) {
        count++;
      }
      if (count >= 5) return true;

      return false;
    }

    if (checkWinCondition(rowIndex, colIndex, currentPlayer)) {
      checkForWinner();
    }

    function checkForWinner() {
      const currentPlayerStones = currentPlayer === 1 ? player1Moves : player2Moves;
      const winningSquares = [];
      
      for (const move of currentPlayerStones) {
        const { row, col } = move;
    
        if (checkWinCondition(row - 1 , col - 1, currentPlayer)) {
          const winner = currentPlayer === 1 ? username1 : username2;
          updateScores(currentPlayer);
          setWinner(winner);
    
          for (let i = 0; i < 5; i++) {
            const square = { row: row - i, col: col - i };
            if (i === 4) {
              
              square.height = 200;
            }
            winningSquares.push(square);
          }
        }
      }
    
      if (currentPlayer === 1) {
        setWinningSquares1(winningSquares);
      } else {
        setWinningSquares2(winningSquares);
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        {boardState.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              onClick={
                isClickEnabled
                  ? () => handleSquareClick(rowIndex, colIndex)
                  : null
              }
            >
              {cell === 1 ? (
                <img
                  src={pinkStone}
                  alt=""
                  style={
                    winningPlayer === username1 && winningSquares1.some((square) => square.row === rowIndex && square.col === colIndex)
                      ? { ...stoneStyle, height: "200px" }
                      : stoneStyle
                  }
                />
              ) : cell === 2 ? (
                <img
                  src={purpleStone}
                  alt=""
                  style={
                    winningPlayer === username2 && winningSquares2.some((square) => square.row === rowIndex && square.col === colIndex)
                      ? { ...stoneStyle, height: "200px" }
                      : stoneStyle
                  }
                />
              ) : (
                ""
              )}
            </Square>
          ))
        )}
      </Container>
      {winningPlayer && (
        <WinnerMessage winner={winningPlayer} resetGame={resetGame} />
      )}
    </Wrapper>
  );
}

export default BoardData;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
`;

const Container = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template: repeat(17, 1fr) / repeat(17, 1fr);

  width: 100%;
  max-width: 400px;
  height: 400px;
`;
const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  max-width: 33.3px;
  max-height: 33.3px;
`;
