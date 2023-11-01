import gameData from "../../../backend/src/routes/game.json";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { pinkStone, purpleStone, stoneStyle } from "./Stones";

const BoardData = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [boardState, setBoardState] = useState(gameData.board.tiles);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [isClickEnabled, setClickEnabled] = useState(true);
  const resetBoard = gameData.board.tiles.map((row) => Array.from(row).fill(0));

  useEffect(() => {
    console.log("Player 1 Moves:", player1Moves);
    console.log("Player 2 Moves:", player2Moves);
  }, [player1Moves, player2Moves]);

  function resetGame() {
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setCurrentPlayer(1);

    if (checkWinCondition) {
      setTimeout(() => {
        alert(`Player ${currentPlayer} Wins! The game will now be reset.`);
        setBoardState(resetBoard);
        setClickEnabled(true);
      }, 100);
    }
  }

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

      console.log(
        `Player ${currentPlayer} placed their mark at row ${
          rowIndex + 1
        } and column ${colIndex + 1}`
      );
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
      resetGame();
    }
  };

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

  function resetGameChoice() {
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setCurrentPlayer(1);
    setBoardState(resetBoard);
    setClickEnabled(true);
  }
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
                <img src={pinkStone} alt="" style={stoneStyle} />
              ) : cell === 2 ? (
                <img src={purpleStone} alt="" style={stoneStyle} />
              ) : (
                ""
              )}
            </Square>
          ))
        )}
      </Container>
    </Wrapper>
  );
};

export default BoardData;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  /* flex-shrink: 1; */
`;

const Container = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template: repeat(17, 1fr) / repeat(17, 1fr);
  /* flex-shrink: 0; */
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
