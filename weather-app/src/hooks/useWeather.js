import { useState, useEffect } from 'react'

export default function useWeather(units) {
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

    async function fetchWeatherData(latitude, longitude, city) {
                setStatus("loading")
                setLastCoords({latitude, longitude, city})

                const result = await searchData(buildURL(latitude, longitude, units))

                if (result) {
                    const fetchResult = {...result, city}
                    setStatus("success")
                    setDataResult(fetchResult)
                } else {
                    setStatus("error")
                }
    }

    async function searchByCity(cityName) {
        setStatus("loading")
        const geoResult = await searchData(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
        
        if(geoResult) {
            if(geoResult.results) {
                const firstResult = geoResult.results[0]
                return fetchWeatherData(firstResult.latitude, firstResult.longitude, `${firstResult.name}, ${firstResult.country}`)
            } else {
                setStatus("no-results")
            }
        } else {
            setStatus("error")
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
        return fetchWeatherData(suggestion.latitude, suggestion.longitude, `${suggestion.name}, ${suggestion.country}`)
    }

    function buildURL(latitude, longitude, units) {
        return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&timezone=America%2FSao_Paulo&temperature_unit=${units.temperature}&wind_speed_unit=${units.wind}&precipitation_unit=${units.precipitation}`
    }

    function retryFetch() {
        return fetchWeatherData(lastCoords.latitude, lastCoords.longitude, lastCoords.city)
    }

    useEffect(() => {
        if(lastCoords) retryFetch()
    }, [units])

    return { dataResult, status, searchByCity, retryFetch, selectSuggestion }
}