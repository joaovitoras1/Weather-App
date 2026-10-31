import { getWeatherIcon } from '@/utils/getWeatherIcon.js'

function DailyCard({time, dailyCode, minTemp, maxTemp}) {

    const date = new Date(time)
    const formattedDay = date.toLocaleDateString("en-US", {weekday: "short"})

    const dayWeatherIcon = getWeatherIcon(dailyCode)

    return (
        <div className="bg-Neutral-800 rounded-xl flex justify-evenly items-center">
            <h2 className="text-Neutral-0 font-medium">{formattedDay}</h2>
            <img src={dayWeatherIcon.icon} alt={dayWeatherIcon.description} className="size-15" />
            <div className="font-medium">
                <p className="text-Neutral-0">{parseInt(maxTemp)}°</p>
                <p className="text-Neutral-200">{parseInt(minTemp)}°</p>
            </div>
        </div>
    )
}

export default DailyCard