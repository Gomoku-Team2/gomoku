const express = require('express');
const router = express.Router();
const gameData = require('./game.json');  // adjust the path if the file is in a different directory
//const {generateUsername } = require("unique-username-generator");

// const players= []
// function create(){
//     const newUser= {
//         name: generateUsername()
//     }
//     players.push(newUser)
//     return newUser
// }

router.get('/create_game', (req, res) => {
    res.json(gameData);
});

router.get('/add_player', (req, res) => {
    res.json(gameData);
});

router.get('/play', (req, res) => {
    res.json(gameData);
});

router.get('/create/player', (req, res) => {
// const newUser= create()
// res.json(newUser)
});


module.exports = router;
