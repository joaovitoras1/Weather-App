import { useState } from 'react';

import HourlyCard from '@/components/HourlyForecast/HourlyCard/HourlyCard.jsx'
import Dropdown from '@/components/UI/Dropdown/Dropdown.jsx'
import iconDropdown from '@/assets/icons/icon-dropdown.svg'

function HourlyForecast({data}) {
    const { time, temperature_2m, weather_code } = data.hourly
    
    const date = new Date(data.current.time)
    const currentDay = date.toLocaleDateString("en-US", { weekday: "long" })

    const [day, setDay] = useState(currentDay)
    const [open, setOpen] = useState(false)

    const formattedArr = time.map((date, index) => {
        return {
            hour: time[index],
            temperature: temperature_2m[index],
            code: weather_code[index]
        }
    })
    
    const filteredHours = formattedArr.filter((item) => {
        const formatDate = new Date(item.hour)
        const formattedDate = formatDate.toLocaleDateString("en-US", { weekday: "long" })
        return formattedDate === day
    })

    const weekDays = data.daily.time.map((days) => {
        const formatDays = new Date(days)
        const formattedDays = formatDays.toLocaleDateString("en-US", { weekday: "long" })
        return formattedDays
    })

    return (
        <div className="pt-5">
            <div className="bg-Neutral-800 rounded-xl py-3 px-5">
                <div className="pb-2 relative">
                    <div className="flex justify-between items-center">
                        <h2 className="text-Neutral-0 font-medium pt-2 pb-2">Hourly forecast</h2>
                        <button onClick={() => setOpen(!open)} className="bg-Neutral-600 text-Neutral-0 rounded-md flex gap-2 py-2 px-3 cursor-pointer">
                            {day}
                            <img src={iconDropdown} alt="icon-dropdown" className="pt-1"/>    
                        </button>
                    </div>
                    {open && <Dropdown className="right-0 top-10 w-35 border border-Neutral-600 rounded-md">
                        {weekDays.map((weekDay) => {
                            return <button key={weekDay} onClick={() => setDay(weekDay)} className="text-Neutral-0 flex px-1.5 py-1 w-full rounded-sm cursor-pointer hover:bg-Neutral-600 focus-visible:outline-1">{weekDay}</button>
                        })}
                    </Dropdown>}
                </div>
                <ul>
                    {filteredHours.map((hour) => {
                        return <li key={hour.hour} className="py-1.5">
                            <HourlyCard currentHour={hour.hour} hourCode={hour.code} hourTemp={hour.temperature} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HourlyForecast