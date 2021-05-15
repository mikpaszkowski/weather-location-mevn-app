import axios from "axios";

export const getWeeklyForecastByCityName: Function = async (cityName: string, units: string = "standard", lang: string = "end") => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&APPID=${process.env.REACT_APP_NOT_WEATHER_API_KEY}&units=${units}&lang=${lang}`);
        return response;
    }catch(err){
        console.log(err.message);
    }
}