import { useState, useEffect } from 'react'

export default function useWeather() {
    const [dataResult, setDataResult] = useState()
    const [status, setStatus] = useState("idle")

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

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async function(position) {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                setStatus("loading")
                const result = await searchData(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation&timezone=America%2FSao_Paulo`)

                if (result) {
                    setStatus("success")
                    setDataResult(result)
                } else {
                    setStatus("error")
                }
            },
            function(error) {
                setStatus("error")
            },
            {timeout: 3000}
        )
    }, [])

    return { dataResult, status }
}