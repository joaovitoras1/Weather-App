import './App.css'

import MainWeather from './components/MainWeather/MainWeather.jsx'
import WeatherMetrics from './components/WeatherMetrics/WeatherMetrics.jsx'

function App() {
  return (
    <div className="max-w-full min-h-screen border-box">
      <MainWeather />
      <WeatherMetrics />
    </div>
  )
}

export default App