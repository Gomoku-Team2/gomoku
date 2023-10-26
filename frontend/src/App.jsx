import './App.css'
import HeroImg from './components/heroImg'
import BoardModal from './components/BoardModal'
import BoardData from './components/BoardData'

function App() {
return (
<section id='landing__page'>
<div className='landing__page--content'>
<HeroImg/>
<BoardModal/>
<BoardData />
</div>
</section>



  )
}

export default App
