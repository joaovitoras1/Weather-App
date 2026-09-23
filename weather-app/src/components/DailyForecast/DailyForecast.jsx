import { weatherData } from '@/utils/weatherMock.js'
import DailyCard from '@/components/DailyForecast/DailyCard/DailyCard.jsx'

const { time, weather_code, temperature_2m_max, temperature_2m_min } = weatherData.daily

function DailyForecast() {
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