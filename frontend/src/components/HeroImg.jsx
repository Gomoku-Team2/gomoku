import styled from 'styled-components'

function HeroImg() {
    return (
        <Hero>
            <Title>GOMOKU</Title>
        </Hero>
    )
}

export default HeroImg

const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Title = styled.h1`
    color: #ece9e9;
    /* background: linear-gradient(90deg,#C43698 2.5%,  #A151E0 99.32%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    margin-bottom: 50px;
    margin-top: 30px;
    font-family: 'Osaka-sans-serif';
    letter-spacing: 4px;
    font-size: 3.1rem;
`
