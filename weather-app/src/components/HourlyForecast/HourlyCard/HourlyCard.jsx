import { getWeatherIcon } from '@/utils/getWeatherIcon.js'

function HourlyCard({currentHour, hourCode, hourTemp}) {

    const onlyHour = new Date(currentHour)
    const formattedHour = onlyHour.toLocaleTimeString("en-US", {hour: "2-digit"})

    const hourWeatherIcon = getWeatherIcon(hourCode)

    return (
        <div>
            <div>
                <img src={hourWeatherIcon.icon} alt={hourWeatherIcon.description} />
                <h2>{formattedHour}</h2>
            </div>
            <p>{parseInt(hourTemp)}°</p>
        </div>
    )
}

export default HourlyCard