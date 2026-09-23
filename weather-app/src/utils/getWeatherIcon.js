import iconDrizzle from '@/assets/weather-icons/icon-drizzle.webp'
import iconFog from '@/assets/weather-icons/icon-fog.webp'
import iconOvercast from '@/assets/weather-icons/icon-overcast.webp'
import iconPartlyCloudy from '@/assets/weather-icons/icon-partly-cloudy.webp'
import iconRain from '@/assets/weather-icons/icon-rain.webp'
import iconSnow from '@/assets/weather-icons/icon-snow.webp'
import iconStorm from '@/assets/weather-icons/icon-storm.webp'
import iconSunny from '@/assets/weather-icons/icon-sunny.webp'

export function getWeatherIcon(code) {
    if(code === 0) return {icon: iconSunny, description: "Sunny"};
    if(code >= 1 && code <= 2) return {icon: iconPartlyCloudy, description: "Partly-Cloudy"};
    if(code === 3) return {icon: iconOvercast, description: "Overcast"};
    if(code >= 45 && code <= 48) return {icon: iconFog, description: "Fog"};
    if(code >= 51 && code <= 57) return {icon: iconDrizzle, description: "Drizzle"};
    if(code >= 61 && code <= 67) return {icon: iconRain, description: "Rain"};
    if(code >= 71 && code <= 77) return {icon: iconSnow, description: "Snow"};
    if(code >= 80 && code <= 83) return {icon: iconRain, description: "Rain"};
    if(code >= 84 && code <= 86) return {icon: iconStorm, description: "Storm"};
    if(code >= 95 && code <= 99) return {icon: iconStorm, description: "Storm"};
}