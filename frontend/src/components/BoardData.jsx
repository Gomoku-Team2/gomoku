// import gameData from '../../../backend/src/routes/game.json'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BoardData = () => {
    const [game, setGame] = useState({})
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
