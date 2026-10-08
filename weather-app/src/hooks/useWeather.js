import { useState, useEffect } from 'react'

export default function useWeather() {
    const [dataResult, setDataResult] = useState()
    const [status, setStatus] = useState("idle")
    const [lastCoords, setLastCoords] = useState()

    async function searchData(url) {
        try {
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error('API request error')
            }
            
            const data = await response.json()
            return data
        } catch(error) {
            console.error('Failed to fetch data', error.message)
            return null
        }
    }

    async function fetchWeatherData(latitude, longitude) {
                setStatus("loading")
                setLastCoords({latitude, longitude})

                const result = await searchData(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&timezone=America%2FSao_Paulo`)

                if (result) {
                    setStatus("success")
                    setDataResult(result)
                } else {
                    setStatus("error")
                }
    }

    async function searchByCity(cityName) {
        setStatus("loading")
        const geoResult = await searchData(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
        
        if(geoResult.results) {
            const firstResult = geoResult.results[0]
            setLastCoords({latitude: firstResult.latitude, longitude: firstResult.longitude})

            const weatherResult = await searchData(`https://api.open-meteo.com/v1/forecast?latitude=${firstResult.latitude}&longitude=${firstResult.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&timezone=America%2FSao_Paulo`)

            if(weatherResult) {
                const location = {...weatherResult, city: `${firstResult.name}, ${firstResult.country}`}
                setStatus("success")
                setDataResult(location)
            } else {
                setStatus("error")
            }
        } else {
            setStatus("no-results")
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                fetchWeatherData(position.coords.latitude, position.coords.longitude)
            },
            function(error) { setStatus("error") },
            {timeout: 3000}
        )
    }, [])
    
    async function selectSuggestion(suggestion) {
        setLastCoords({latitude: suggestion.latitude, longitude: suggestion.longitude})

        const suggestionSearch = await searchData(`https://api.open-meteo.com/v1/forecast?latitude=${suggestion.latitude}&longitude=${suggestion.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&timezone=America%2FSao_Paulo`)
        
        if(suggestionSearch) {
            const searchResult = {...suggestionSearch, city: `${suggestion.name}, ${suggestion.country}`}
            setStatus("success")
            setDataResult(searchResult)
        } else {
            setStatus("error")
        }
    }

    function retryFetch() {
        return fetchWeatherData(lastCoords.latitude, lastCoords.longitude)
    }

    return { dataResult, status, searchByCity, retryFetch, selectSuggestion }
}