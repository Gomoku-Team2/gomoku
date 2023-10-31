import './App.css'
import HeroImg from './components/heroImg'
import BoardModal from './components/BoardModal'
import UserHandler from './components/UserHandler'

function App() {

return (
<section id="landing__page">
<div className="landing__page__content">
<HeroImg/>
<BoardModal/>
<UserHandler />
{/* <BoardData /> */}
</div>
</section>

  )
}

export default App
