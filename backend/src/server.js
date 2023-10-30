
const PORT = 5000
const gameJson = require('./routes/game.json')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const UUID = uuidv4()
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
app.use(express.static(path.join(path.resolve(), 'public')))

app.get('/create', async (req, res) => {
    try {
        res.json(gameJson)
    } catch (err) {
        console.log(err.message)
    }
})

app.get('/add_player', async (req, res) => {
    try {
        if (gameJson.player1.id === '') {

            const updatedGame = {
                ...gameJson,
                player1: {
                    ...gameJson.player1,
                    id: UUID
                }
            }
            console.log(updatedGame)
            res.json(updatedGame)
        } else {
            res.send('då')
        }
    } catch (err) {
        console.log(err.message)
    }
})
app.post('/add_player', async (req, res) => {
    try {
        if (gameJson.player1.id === '') {
        } else {
            res.send('då')
        }
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
})
