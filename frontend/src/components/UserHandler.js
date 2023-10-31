//import axios from 'axios'
import {generateUsername} from "unique-username-generator"

function UserHandler () {

const user1 = localStorage.getItem("Username1")
const user2 = localStorage.getItem("Username2")
const generateUser1= generateUsername()
const generateUser2= generateUsername()
//const api = "/api/gomoku/generate_username"
if (user1 && user2){
    console.log(`User1: ${user1}, User2: ${user2} `)
}
else {
    //console.log("User not found")
     localStorage.setItem("Username1", generateUser1)
     localStorage.setItem("Username2", generateUser2)
}
console.log("user1", user1)
console.log("user2", user2)
}


export default UserHandler;

// const players= []
// function create(){
//     const newUser= {
//         name: generateUsername()
//     }
//     players.push(newUser)
// } return newUser


// axios.post("http://localhost:5173/api/gomoku/create/player")
// .then ((response)=> response.data())
// .then ((newUser) =>{

// localStorage.setItem("User", newUser)

// })
// .catch (err=> console.error ("Request failed", err))
