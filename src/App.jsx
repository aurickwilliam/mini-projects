import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CounterProgram from './pages/CounterProgram'
import NumberGuessing from './pages/NumberGuessing'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-program" element={<CounterProgram />} />
        <Route path="/number-guessing" element={<NumberGuessing />} />
      </Routes>
    </main>
  )
}