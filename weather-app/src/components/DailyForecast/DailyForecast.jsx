import DailyCard from '@/components/DailyForecast/DailyCard/DailyCard.jsx'

function DailyForecast({data}) {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = data.daily

    return (
        <div>
            <h2 className="text-Neutral-0 font-medium pt-4 pb-2">Daily forecast</h2>
            <ul>
                {time.map((day, index) => {
                    return <li key={day} className="py-2">
                        <DailyCard time={day} dailyCode={weather_code[index]} minTemp={temperature_2m_min[index]} maxTemp={temperature_2m_max[index]} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default DailyForecast