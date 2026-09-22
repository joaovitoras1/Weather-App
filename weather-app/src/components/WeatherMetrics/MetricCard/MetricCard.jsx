function MetricCard({label, value}) {

    const units = {
        "Feels Like": "°",
        "Humidity": "%",
        "Wind": " km/h",
        "Precipitation": " mm"
    }

    const formattedValue = parseInt(value) + units[label]

    return (
        <div>
            <h2>{label}</h2>
            <p>{formattedValue}</p>
        </div>
    )
}

export default MetricCard