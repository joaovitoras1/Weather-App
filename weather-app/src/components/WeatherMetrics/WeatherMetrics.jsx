import { weatherData } from '@/utils/weatherMock.js'
import MetricCard from '@/components/WeatherMetrics/MetricCard/MetricCard.jsx'

const metricInfo = [
    {label: "Feels Like", value: weatherData.current.apparent_temperature}, 
    {label: "Humidity", value: weatherData.current.relative_humidity_2m}, 
    {label: "Wind", value: weatherData.current.wind_speed_10m}, 
    {label: "Precipitation", value: weatherData.current.precipitation}
]

function WeatherMetrics() {
    return (
        <div>
            <ul>
                {metricInfo.map((metric) => {
                    return <li key={metric.label}>
                        <MetricCard label={metric.label} value={metric.value}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default WeatherMetrics