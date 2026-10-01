import './App.css'

import MainWeather from '@/components/MainWeather/MainWeather.jsx'
import WeatherMetrics from '@/components/WeatherMetrics/WeatherMetrics.jsx'
import SearchBar from '@/components/SearchBar/SearchBar.jsx'
import Units from '@/components/Units/Units.jsx'
import DailyForecast from '@/components/DailyForecast/DailyForecast.jsx'
import HourlyForecast from '@/components/HourlyForecast/HourlyForecast.jsx'

import useWeather from '@/hooks/useWeather'

function App() {
  const {dataResult, status} = useWeather()

  {/*if(status === "error") return "<ErrorWindow />"*/}

  return (
    
    <div className="max-w-full min-h-screen border-box">
      {status === "no-results" 
        ? <p>No search results found!</p> 
        : <>
          <div>
            <img src="" alt="logo" />
            <Units />
          </div>
          <SearchBar />
          {status === "success" && <MainWeather data={dataResult} />}
          {status === "success" && <WeatherMetrics data={dataResult} />}
          {status === "success" && <DailyForecast data={dataResult} />}
          {status === "success" && <HourlyForecast data={dataResult} />}
          </>}
    </div>
  )
}

export default App