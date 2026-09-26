import { useState } from 'react';

import { weatherData } from '@/utils/weatherMock.js'

import HourlyCard from '@/components/HourlyForecast/HourlyCard/HourlyCard.jsx'
import Dropdown from '@/components/UI/Dropdown/Dropdown.jsx'

const { time, temperature_2m, weather_code } = weatherData.hourly

const date = new Date(weatherData.current.time)
const currentDay = date.toLocaleDateString("en-US", { weekday: "long" })

function HourlyForecast() {

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

    const weekDays = weatherData.daily.time.map((days) => {
        const formatDays = new Date(days)
        const formattedDays = formatDays.toLocaleDateString("en-US", { weekday: "long" })
        return formattedDays
    })

    return (
        <div>
            <div>
                <h2>Hourly Forecast</h2>
                <button onClick={() => setOpen(!open)}>{day}</button>
                {open && <Dropdown>
                    {weekDays.map((weekDay) => {
                        return <button key={weekDay} onClick={() => setDay(weekDay)}>{weekDay}</button>
                    })}
                </Dropdown>}
            </div>
            <ul>
                {filteredHours.map((hour) => {
                    return <li key={hour.hour}>
                        <HourlyCard currentHour={hour.hour} hourCode={hour.code} hourTemp={hour.temperature} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default HourlyForecast