import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("api key", API_KEY)

export const fetchWeather = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};