//import axios from 'axios'
import styled from "styled-components";
import { generateUsername } from "unique-username-generator";
import PropTypes from 'prop-types';


const UserHandler = ({currentPlayer}) => {

  const user1 = localStorage.getItem("Username1");
  const user2 = localStorage.getItem("Username2");

  let generateUser1 = generateUsername("",0,8);
  let generateUser2 = generateUsername("",0,8);
  //const api = "/api/gomoku/generate_username"
  if (user1 || user2) {
    console.log(`User1: ${user1}, User2: ${user2} `);
  } else {
    localStorage.setItem("Username1", generateUser1);
    localStorage.setItem("Username2", generateUser2);
  }
  UserHandler.propTypes={
    currentPlayer: PropTypes.func.isRequired
  }

  return (
      <>
    <PlayerWrapper>
      <PlayerOne isCurrentPlayer={currentPlayer===1}>{user1} </PlayerOne>
      <PlayerTwo isCurrentPlayer={currentPlayer===2}>{user2}</PlayerTwo>
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

const PlayerOne = styled.div`
color: ${props => (props.isCurrentPlayer? "#FD709A": "white")}

`;
const PlayerTwo = styled.div`
color: ${props => (props.isCurrentPlayer? "#BF70FD": "white")}

`;


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
