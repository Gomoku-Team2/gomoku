import gameData from "../../../backend/src/routes/game.json";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BoardData = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [boardState, setBoardState] = useState(gameData.board.tiles);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);

  useEffect(() => {
    setPlayer1Moves([]);
  }, []);

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
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              ) : cell === 2 ? (
                <img
                  src="https://i.ytimg.com/vi/_loej3C6e78/maxresdefault.jpg"
                  alt=""
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
`;
