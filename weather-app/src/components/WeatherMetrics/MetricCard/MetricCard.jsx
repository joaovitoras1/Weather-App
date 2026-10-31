function MetricCard({label, value, unitName}) {
    const formattedValue = parseInt(value) + unitName

    return (
        <div className="bg-Neutral-800 rounded-xl py-3 pl-4 flex flex-col">
            <h2 className="text-Neutral-200 text-sm font-medium">{label}</h2>
            <p className="text-Neutral-0 text-2xl">{formattedValue}</p>
        </div>
    )
}

export default MetricCard