function DailyForecastSkeleton() {
    const cards = Array.from({length: 7})

    return (
        <div>
            <h2 className="text-Neutral-0 font-medium pt-4 pb-4">Daily forecast</h2>
            <ul aria-hidden="true" className="flex flex-col gap-4">
                {cards.map((_, index) => {
                    return <li key={index} className="bg-Neutral-800 py-7.5 rounded-xl"></li>
                })}
            </ul>
        </div>
    )
}

export default DailyForecastSkeleton