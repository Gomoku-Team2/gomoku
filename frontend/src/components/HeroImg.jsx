import styled from 'styled-components'

function HeroImg() {
    return (
        <Hero>
          <TitleContainer>
            <Title>GOMUKU</Title>
          </TitleContainer>
        </Hero>
    )
}

export default HeroImg

const Hero = styled.div`
    margin: 0;
`
const TitleContainer = styled.div`
max-width: fit-content;
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
margin: 50px;
/* background-color: black; */
margin-top: 100px;
border-bottom: 5px #f0ead6 solid;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: start;
    color: #f0ead6;
    margin-bottom: 10px;
`
