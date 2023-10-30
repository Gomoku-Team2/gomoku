import gameData from "../../../backend/src/routes/game.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {pinkStone, purpleStone, stoneStyle} from "./Stones"

const BoardData = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [boardState, setBoardState] = useState(gameData.board.tiles);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);

  

  const handleSquareClick = (rowIndex, colIndex) => {
    if (boardState[rowIndex][colIndex] === 0) {
      const updatedBoard = [...boardState];

      updatedBoard[rowIndex][colIndex] = currentPlayer;

      if (currentPlayer === 1) {
        setPlayer1Moves([
          ...player1Moves,
          { row: rowIndex + 1, col: colIndex + 1 },
        ]);
      } else {
        setPlayer2Moves([
          ...player2Moves,
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
      console.log(`Player ${currentPlayer}'s turn`);
      console.log(player1Moves, player2Moves);
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
      console.log(`Player ${currentPlayer} wins!`);
    }
  };

  return (
    <Wrapper>
      <Container>
        {gameData.board.tiles.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {cell === 1 ? (
                <img
                  src={pinkStone}
                  alt=""
                  style={stoneStyle}
                />
              ) : cell === 2 ? (
                <img
                  src={purpleStone}
                  alt=""
                  style={stoneStyle}
                />
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
  flex-shrink: 1;
`;

const Container = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template: repeat(17, 1fr) / repeat(17, 1fr);
  flex-shrink: 0;
  width: 100%;
  max-width: 505px;
  height: 505px;
`;
const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  max-width: 33.3px;
  max-height: 33.3px;
`

;
