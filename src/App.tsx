import Stars from './components/Stars/Stars'
import './App.css'

function App() {
  function countStars(max) {
    return Math.floor(Math.random() * max)
  }

  return (
    <div className='main-content'>
      <Stars count = {countStars(6)} />
    </div>
  )
}

export default App