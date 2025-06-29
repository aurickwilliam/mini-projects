import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CounterProgram from './pages/CounterProgram'
import NumberGuessing from './pages/NumberGuessing'
import RandomNumber from './pages/RandomNumber'
import DigitalClock from './pages/DigitalClock'
import PasswordGenerator from './pages/PasswordGenerator'
import TemperatureConversion from './pages/TemperatureConversion'
import Stopwatch from './pages/Stopwatch'
import ImageSlider from './pages/ImageSlider'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-program" element={<CounterProgram />} />
        <Route path="/number-guessing" element={<NumberGuessing />} />
        <Route path="/random-number" element={<RandomNumber />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/temperature-conversion" element={<TemperatureConversion />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/image-slider" element={<ImageSlider />} />
      </Routes>
    </main>
  )
}