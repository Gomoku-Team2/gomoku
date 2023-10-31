// import gameData from '../../../backend/src/routes/game.json'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const UUID = uuidv4()
const BoardData = () => {
    const [game, setGame] = useState({})

    const getUUIDFromLocalStorage = () => {
        const uuid = localStorage.getItem('uuid');
        if (!uuid) {
            // const newUUID = uuidv4(); // Generate a new UUID
            localStorage.setItem('uuid', UUID); // Save it in local storage
            return UUID;
        }
        return uuid;
    };

     getUUIDFromLocalStorage();
  // Function to send player information to the server
  const joinGame = async () => {
    const playerName = prompt('Enter your name:'); // You can use your UI to collect the player's name
    if (playerName) {
        const playerId = localStorage.getItem('uuid'); // Get the client-side UUID

        try {
            const response = await axios.post('http://localhost:5000/add_player', {
                name: playerName,
                id: playerId,
            });
            setGame(response.data);
        } catch (error) {
            // Handle errors
        }
    }
};






    useEffect(() => {
        const fetchGame = async () => {
            try {
                const res = await axios.get('http://localhost:5000/create')
                // console.log(res.data)
                setGame(res.data)
            } catch (err) {
                // console.log(err);
            }
        }

        fetchGame()
    }, [])
    // console.log(gameData)

    return (

        <Wrapper>

        <Container>
            {game.board ? (
                game.board.tiles.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Square key={`${rowIndex}-${colIndex}`}>{cell}</Square>
                    ))
                )
            ) : (
                <div>Gameboard is loading</div>
            )}
        </Container>
        <button onClick={joinGame}>Join Game</button>
    </Wrapper>
    )
}

export default BoardData

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
`

const Container = styled.div`
    border: 1px solid white;
    display: grid;
    grid-template: repeat(17, 1fr) / repeat(17, 1fr);
    flex-shrink: 0;
    width: 100%;
    max-width: 505px;
    height: 505px;
`
const Square = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    max-width: 33.3px;
    max-height: 33.3px;
`
