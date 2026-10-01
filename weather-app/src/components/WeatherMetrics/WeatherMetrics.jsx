import MetricCard from '@/components/WeatherMetrics/MetricCard/MetricCard.jsx'

function WeatherMetrics({data}) {
    const metricInfo = [
        {label: "Feels Like", value: data.current.apparent_temperature}, 
        {label: "Humidity", value: data.current.relative_humidity_2m}, 
        {label: "Wind", value: data.current.wind_speed_10m}, 
        {label: "Precipitation", value: data.current.precipitation}
    ]

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