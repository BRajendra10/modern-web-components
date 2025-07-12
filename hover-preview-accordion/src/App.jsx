import Accordion from './components/Accordion'
import data from './accordion.json';
import './App.css'

function App() {
  return (
    <div className="container">
      <Accordion data={data} />
    </div>
  )
}

export default App
