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
        <div className="flex flex-col justify-center items-center h-70 bg-(image:--mobile-version) bg-no-repeat bg-contain bg-center">
            <div className="text-center">
                <h2 className="text-Neutral-0 text-2xl font-medium pb-2">{data.city ? data.city : "Current Location"}</h2>
                <p className="text-Neutral-200 text-sm">{date.toLocaleDateString("en-US", options)}</p>
            </div>
            <div className="flex items-center">
                <img src={weatherInfo.icon} alt={weatherInfo.description} className="size-25"/>
                <p className="text-Neutral-0 text-7xl">{parseInt(data.current.temperature_2m)}°</p>
            </div>
        </div>
    )
}

export default MainWeather