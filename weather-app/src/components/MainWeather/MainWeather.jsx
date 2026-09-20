import { weatherData } from '../../utils/weatherMock'
import { getWeatherIcon } from '../../utils/getWeatherIcon'

function MainWeather() {
    
    const date = new Date(weatherData.current.time)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    const weatherInfo = getWeatherIcon(weatherData.current.weather_code)

    return (
        <div>
            <div>
                <h2>{weatherData.city}</h2>
                <p>{date.toLocaleDateString("en-US", options)}</p>
            </div>
            <div>
                <img src={weatherInfo.icon} alt={weatherInfo.description} />
                <p>{parseInt(weatherData.current.temperature_2m)}°</p>
            </div>
        </div>
    )
}

export default MainWeather