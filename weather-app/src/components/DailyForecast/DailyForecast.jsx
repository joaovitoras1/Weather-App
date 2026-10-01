import DailyCard from '@/components/DailyForecast/DailyCard/DailyCard.jsx'

function DailyForecast({data}) {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = data.daily

    return (
        <div>
            <ul>
                {time.map((day, index) => {
                    return <li key={day}>
                        <DailyCard time={day} dailyCode={weather_code[index]} minTemp={temperature_2m_min[index]} maxTemp={temperature_2m_max[index]} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default DailyForecast