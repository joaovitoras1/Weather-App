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

function WeatherMetrics({data, units, isLoading}) {
    const currentData = data?.current ?? {}

    const metricInfo = [
        {label: "Feels Like", value: currentData.apparent_temperature, weatherUnit: unitsTranslate["temperature"][units.temperature]}, 
        {label: "Humidity", value: currentData.relative_humidity_2m, weatherUnit: "%"}, 
        {label: "Wind", value: currentData.wind_speed_10m, weatherUnit: unitsTranslate["wind"][units.wind]}, 
        {label: "Precipitation", value: currentData.precipitation, weatherUnit: unitsTranslate["precipitation"][units.precipitation]}
    ]

    return (
        <div className="py-4">
            <ul className="grid grid-cols-2 gap-4">
                {metricInfo.map((metric) => {
                    return <li key={metric.label}>
                        <MetricCard label={metric.label} value={metric.value} unitName={metric.weatherUnit} isLoading={isLoading} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default WeatherMetrics