import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CounterProgram from './pages/CounterProgram'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-program" element={<CounterProgram />} />
      </Routes>
    </main>
  )
}