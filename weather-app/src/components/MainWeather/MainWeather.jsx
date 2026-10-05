import { getWeatherIcon } from '@/utils/getWeatherIcon.js'

function MainWeather({data}) {
    
    const date = new Date(data.current.time)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    }

    const weatherInfo = getWeatherIcon(data.current.weather_code)

    return (
        <div>
            <div>
                <h2>{data.city}</h2>
                <p>{date.toLocaleDateString("en-US", options)}</p>
            </div>
            <div>
                <img src={weatherInfo.icon} alt={weatherInfo.description} />
                <p>{parseInt(data.current.temperature_2m)}°</p>
            </div>
        </div>
    )
}

export default MainWeather