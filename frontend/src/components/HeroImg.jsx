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
  margin: 30px 0 30px;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  align-items: start;
  color: #ffffff;
  margin-bottom: 30px;
  font-family: 'Osaka-sans-serif';
`
