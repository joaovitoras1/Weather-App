import iconDropdown from '@/assets/icons/icon-dropdown.svg'

function HourlyForecastSkeleton() {
    const cards = Array.from({length: 24})

    return (
        <div className="pt-7">
            <div className="bg-Neutral-800 rounded-xl py-3 px-5 h-150">
                <div className="pb-1.5">
                    <div className="flex justify-between items-center">
                        <h2 className="text-Neutral-0 font-medium pt-2 pb-2">Hourly forecast</h2>
                        <div aria-hidden="true" className="bg-Neutral-600 flex gap-3 py-2 px-3 rounded-md">
                            <div aria-hidden="true" className="text-Neutral-0">—</div>
                            <img src={iconDropdown} alt="" className="pt-1"/>
                        </div>
                    </div>
                </div>
                <ul aria-hidden="true" className="flex flex-col gap-3 pt-2 pb-1.5 overflow-y-auto scrollbar-thin scrollbar-thumb-Neutral-600 max-h-129">
                    {cards.map((_, index) => {
                        return <li key={index} className="bg-Neutral-700 py-6.5 px-3 rounded-md"></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HourlyForecastSkeleton