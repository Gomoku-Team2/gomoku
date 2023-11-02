//import axios from 'axios'
import styled from "styled-components";
import { generateUsername } from "unique-username-generator";

const UserHandler = () => {
  const user1 = localStorage.getItem("Username1");
  const user2 = localStorage.getItem("Username2");

  let generateUser1 = generateUsername();
  let generateUser2 = generateUsername();
  //const api = "/api/gomoku/generate_username"
  if (user1 || user2) {
    console.log(`User1: ${user1}, User2: ${user2} `);
  } else {
    localStorage.setItem("Username1", generateUser1);
    localStorage.setItem("Username2", generateUser2);
  }

  return (
      <>
    <PlayerWrapper>
      <PlayerOne>{user1} </PlayerOne>
      <PlayerTwo>{user2}</PlayerTwo>
    </PlayerWrapper>
  </>
);
};
export default UserHandler;

const PlayerWrapper = styled.div`
color: white;
display: flex;
justify-content: space-around;
font-size: 20px;
font-family: "Osaka-sans-serif";

margin: 10px 20px 0px;
`;

const PlayerOne = styled.div``;
const PlayerTwo = styled.div``;


// const players= []
// function create(){
    //     const newUser= {
        //         name: generateUsername()
        //     }
        //     players.push(newUser)
        // } return newUser

        // axios.post("http://localhost:5173/api/gomoku/create/player")
        // .then ((response)=> response.data.newUser())
        // .then ((newUser) =>{

            // localStorage.setItem("User", newUser)

            // })
            // .catch (err=> console.error ("Request failed", err))
