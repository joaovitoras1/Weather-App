import MetricCard from '@/components/WeatherMetrics/MetricCard/MetricCard.jsx'

const unitsTranslate = {
    temperature: {
        celsius: "°",
        fahrenheit: "°"
    },
    wind: {
        kmh: " km/h",
        mph: " mph"
    },
    precipitation: {
        mm: " mm",
        inch: " in"
    }
}

function WeatherMetrics({data, units}) {
    const metricInfo = [
        {label: "Feels Like", value: data.current.apparent_temperature, weatherUnit: unitsTranslate["temperature"][units.temperature]}, 
        {label: "Humidity", value: data.current.relative_humidity_2m, weatherUnit: "%"}, 
        {label: "Wind", value: data.current.wind_speed_10m, weatherUnit: unitsTranslate["wind"][units.wind]}, 
        {label: "Precipitation", value: data.current.precipitation, weatherUnit: unitsTranslate["precipitation"][units.precipitation]}
    ]

    return (
        <div>
            <ul>
                {metricInfo.map((metric) => {
                    return <li key={metric.label}>
                        <MetricCard label={metric.label} value={metric.value} unitName={metric.weatherUnit}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default WeatherMetrics