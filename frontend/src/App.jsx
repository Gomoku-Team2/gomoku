import './App.css'
import HeroImg from './components/heroImg'
import BoardModal from './components/BoardModal'
import ScoreBoardModal from './components/ScoreBoardModal'


function App() {

return (
<section id="landing__page">
<div className="landing__page__content">

<HeroImg/>
<BoardModal/>
<ScoreBoardModal />
{/* <BoardData /> */}
</div>
</section>

  )
}

export default App
