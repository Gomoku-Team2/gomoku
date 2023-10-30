import axios from 'axios'

function UserHandler () {

const user = localStorage.getItem("username")
const api = "http://localhost:5173/api/gomoku/generate_username"
if (user){
    console.log(`User: ${user}`)
}
else {
    console.log("User not found")
axios.get(api)
.then ((response)=> response.data())
.then ((newUser) =>{

localStorage.setItem("User", newUser)

})
.catch (err=> console.error ("Request failed", err))
}
}
export default UserHandler;
