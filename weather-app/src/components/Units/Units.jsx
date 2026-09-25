import { useState } from 'react'

import Dropdown from '@/components/UI/Dropdown/Dropdown.jsx'

import iconUnits from '@/assets/icons/icon-units.svg'
import iconDropdown from '@/assets/icons/icon-dropdown.svg'
import iconCheckmark from '@/assets/icons/icon-checkmark.svg'

function Units() {

    const [open, setOpen] = useState(false)

    const [units, setUnits] = useState({temperature: "celsius", wind: "kmh", precipitation: "mm"})

    function changeUnit(category, newUnit) {
        setUnits({...units, [category]: newUnit})
    }

    function changeToImperial() { setUnits({temperature: "fahrenheit", wind: "mph", precipitation: "in"}) }
    function changeToMetric() { setUnits({temperature: "celsius", wind: "kmh", precipitation: "mm"}) }

    const isImperial = units.temperature === "fahrenheit" && units.wind === "mph" && units.precipitation === "in"
    
    const buttonText = isImperial ? "Switch to Metric" : "Switch to Imperial"

    return (
        <div>
            <button onClick={() => setOpen(!open)}>
                <img src={iconUnits} alt="icon-units" />
                Units
                <img src={iconDropdown} alt="icon-checkmark" />
            </button>
            {open && <Dropdown>
                <button onClick={() => isImperial ? changeToMetric() : changeToImperial()}>{buttonText}</button>
                <div>
                    <p>temperature</p>
                    <button onClick={() => changeUnit("temperature", "celsius")}>
                        Celsius (°C)
                        {units.temperature === "celsius" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                    <button onClick={() => changeUnit("temperature", "fahrenheit")}>
                        Fahrenheit (°F)
                        {units.temperature === "fahrenheit" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                </div>
                <div>
                    <p>Wind</p>
                    <button onClick={() => changeUnit("wind", "kmh")}>
                        km/h
                        {units.wind === "kmh" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                    <button onClick={() => changeUnit("wind", "mph")}>
                        mph
                        {units.wind === "mph" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                </div>
                <div>
                    <p>Precipitation</p>
                    <button onClick={() => changeUnit("precipitation", "mm")}>
                        Millimeters (mm)
                        {units.precipitation === "mm" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                    <button onClick={() => changeUnit("precipitation", "in")}>
                        Inches (in)
                        {units.precipitation === "in" && <img src={iconCheckmark} alt="selected" />}
                    </button>
                </div>
                </Dropdown>}
        </div>
    )
}

export default Units