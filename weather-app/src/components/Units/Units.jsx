import { useState } from 'react'

import Dropdown from '@/components/UI/Dropdown/Dropdown'
import UnitOption from '@/components/Units/UnitOption/UnitOption'

import iconUnits from '@/assets/icons/icon-units.svg'
import iconDropdown from '@/assets/icons/icon-dropdown.svg'

function Units({units, changeUnit, changeToMetric, changeToImperial}) {
    const [open, setOpen] = useState(false)

    const isImperial = units.temperature === "fahrenheit" && units.wind === "mph" && units.precipitation === "inch"
    
    const buttonText = isImperial ? "Switch to Metric" : "Switch to Imperial"

    return (
        <div className="text-Neutral-0 font-medium relative">
            <button onClick={() => setOpen(!open)} aria-expanded={open} className="bg-Neutral-800 hover:bg-Neutral-700 flex gap-2 p-2 rounded-md cursor-pointer">
                <img src={iconUnits} alt="" />
                Units
                <img src={iconDropdown} alt="" />
            </button>
            {open && <Dropdown className="right-0 w-53.5">
                <div className="hover:bg-Neutral-700 rounded-md">
                    <button onClick={() => isImperial ? changeToMetric() : changeToImperial()} className="cursor-pointer p-1.5 rounded-md w-full text-left focus-visible:outline-1 focus-visible:outline-offset-1">{buttonText}</button>
                </div>
                <div className="pb-2 px-1 flex flex-col gap-1 border-b border-Neutral-600">
                    <p className="text-Neutral-200 font-normal pl-0.5">Temperature</p>
                    <UnitOption onClick={() => changeUnit("temperature", "celsius")} selected={units.temperature === "celsius"} text="Celsius (°C)" />
                    <UnitOption onClick={() => changeUnit("temperature", "fahrenheit")} selected={units.temperature === "fahrenheit"} text="Fahrenheit (°F)" />
                </div>
                <div className="pb-2 px-2 flex flex-col gap-1 border-b border-Neutral-600">
                    <p className="text-Neutral-200 font-normal pl-0.5 pt-1.5">Wind Speed</p>
                    <UnitOption onClick={() => changeUnit("wind", "kmh")} selected={units.wind === "kmh"} text="km/h" />
                    <UnitOption onClick={() => changeUnit("wind", "mph")} selected={units.wind === "mph"} text="mph" />
                </div>
                <div className="pb-1 px-2 flex flex-col gap-1">
                    <p className="text-Neutral-200 font-normal pl-0.5 pt-1.5">Precipitation</p>
                    <UnitOption onClick={() => changeUnit("precipitation", "mm")} selected={units.precipitation === "mm"} text="Millimeters (mm)" />
                    <UnitOption onClick={() => changeUnit("precipitation", "inch")} selected={units.precipitation === "inch"} text="Inches (in)" />
                </div>
                </Dropdown>}
        </div>
    )
}

export default Units