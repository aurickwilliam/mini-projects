import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CounterProgram from './pages/CounterProgram'
import NumberGuessing from './pages/NumberGuessing'
import RandomNumber from './pages/RandomNumber'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-program" element={<CounterProgram />} />
        <Route path="/number-guessing" element={<NumberGuessing />} />
        <Route path="/random-number" element={<RandomNumber />} />
      </Routes>
    </main>
  )
}