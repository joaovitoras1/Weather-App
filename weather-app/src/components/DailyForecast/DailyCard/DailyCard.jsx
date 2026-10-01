import { getWeatherIcon } from '@/utils/getWeatherIcon.js'

function DailyCard({time, dailyCode, minTemp, maxTemp}) {

    const date = new Date(time)
    const formattedDay = date.toLocaleDateString("en-US", {weekday: "short"})

    const dayWeatherIcon = getWeatherIcon(dailyCode)

    return (
        <div>
            <h2>{formattedDay}</h2>
            <img src={dayWeatherIcon.icon} alt={dayWeatherIcon.description} />
            <div>
                <p>{parseInt(minTemp)}°</p>
                <p>{parseInt(maxTemp)}°</p>
            </div>
        </div>
    )
}

export default DailyCard