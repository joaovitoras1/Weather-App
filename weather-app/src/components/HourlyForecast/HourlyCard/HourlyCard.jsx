import { getWeatherIcon } from '@/utils/getWeatherIcon.js'

function HourlyCard({currentHour, hourCode, hourTemp}) {

    const onlyHour = new Date(currentHour)
    const formattedHour = onlyHour.toLocaleTimeString("en-US", {hour: "2-digit"})

    const hourWeatherIcon = getWeatherIcon(hourCode)

    return (
        <div className="bg-Neutral-700 text-Neutral-0 rounded-md flex items-center justify-between px-3">
            <div className="flex items-center">
                <img src={hourWeatherIcon.icon} alt={hourWeatherIcon.description} className="size-13"/>
                <h2>{formattedHour}</h2>
            </div>
            <p className="pr-2">{parseInt(hourTemp)}°</p>
        </div>
    )
}

export default HourlyCard