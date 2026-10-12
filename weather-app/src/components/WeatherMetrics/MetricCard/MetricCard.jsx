function MetricCard({label, value, unitName}) {
    const formattedValue = parseInt(value) + unitName

    return (
        <div>
            <h2>{label}</h2>
            <p>{formattedValue}</p>
        </div>
    )
}

export default MetricCard