import './App.css'
import { useState } from 'react';

import Logo from '@/assets/logo/logo.svg'

import MainWeather from '@/components/MainWeather/MainWeather.jsx'
import WeatherMetrics from '@/components/WeatherMetrics/WeatherMetrics.jsx'
import SearchBar from '@/components/SearchBar/SearchBar.jsx'
import Units from '@/components/Units/Units.jsx'
import DailyForecast from '@/components/DailyForecast/DailyForecast.jsx'
import HourlyForecast from '@/components/HourlyForecast/HourlyForecast.jsx'

import ErrorWindow from '@/components/ErrorWindow/ErrorWindow.jsx'

import useWeather from '@/hooks/useWeather'

function App() {
  const [units, setUnits] = useState({temperature: "celsius", wind: "kmh", precipitation: "mm"})
  
  function changeUnit(category, newUnit) {
    setUnits({...units, [category]: newUnit})
  }
  
  function changeToImperial() { setUnits({temperature: "fahrenheit", wind: "mph", precipitation: "inch"}) }
  function changeToMetric() { setUnits({temperature: "celsius", wind: "kmh", precipitation: "mm"}) }

  const {dataResult, status, searchByCity, retryFetch, selectSuggestion} = useWeather(units)

  if(status === "error") return <ErrorWindow retry={retryFetch}/>
  
  return (
    <div className="max-w-full min-h-screen border-box">
      {status === "no-results" 
        ? <>
          <div>
            <img src={Logo} alt="logo" />
            <Units units={units} changeUnit={changeUnit} changeToMetric={changeToMetric} changeToImperial={changeToImperial} />
          </div>
          <h2>How's the sky looking today?</h2>
          <SearchBar searchByCity={searchByCity} selectSuggestion={selectSuggestion} />
          <p>No search results found!</p>
          </>
        : <>
          <div>
            <img src={Logo} alt="logo" />
            <Units units={units} changeUnit={changeUnit} changeToMetric={changeToMetric} changeToImperial={changeToImperial} />
          </div>
          <h1>How's the sky looking today?</h1>
          
          <SearchBar searchByCity={searchByCity} selectSuggestion={selectSuggestion} />
          {status === "success" && <MainWeather data={dataResult} />}
          {status === "success" && <WeatherMetrics data={dataResult} units={units} />}
          {status === "success" && <DailyForecast data={dataResult} />}
          {status === "success" && <HourlyForecast data={dataResult} />}
          </>}
    </div>
  )
}

export default App