const PORT = 5000
let gameJson = require('./routes/game.json')
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

// // Function to retrieve the UUID from local storage
// const getUUIDFromLocalStorage = () => {
//     return localStorage.getItem('uuid');
// };

// // Function to set the UUID in local storage
// const setUUIDInLocalStorage = (uuid) => {
//     localStorage.setItem('uuid', uuid);
// };

// app.post('/add_player', async (req, res) => {
//     try {
//         const storedUuid = getUUIDFromLocalStorage();
//         if (!storedUuid) {
//             setUUIDInLocalStorage(UUID)
//             gameJson = {
//                 ...gameJson,
//                 player1: {

//                     id: UUID
//                 }
//             }
//             // console.log(updatedGame)
//             res.json(gameJson)
//         } else {
//             res.send('alreay an id')
//         }
//     } catch (err) {
//         console.log(err.message)
//     }
// })
app.post('/add_player', async (req, res) => {
    try {
        if (!gameJson.player1.name && !gameJson.player1.id) {
            // Player 1 joins
            gameJson.player1.name = req.body.name // Get the name from the request
            gameJson.player1.id = req.body.id // Use the UUID or another identifier

            res.json(gameJson)
        } else if (!gameJson.player2.name && !gameJson.player2.id) {
            // Player 2 joins
            gameJson.player2.name = req.body.name // Get the name from the request
            gameJson.player2.id = req.body.id // Use the UUID or another identifier

            // Start the game, update game state, etc.
            // ...

            res.json(gameJson)
        } else {
            res.send('Game is full. Cannot join.')
        }
    } catch (err) {
        console.log(err.message)
    }
})





app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
})
