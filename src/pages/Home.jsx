import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import { fetchWeather, fetchForecast } from '../api';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    const weatherData = await fetchWeather(city);
    const forecastData = await fetchForecast(city);
    
    if (weatherData) {
      setWeather(weatherData);
    } else {
      setError('City not found');
    }
    
    if (forecastData) {
      const dailyForecast = forecastData.list.filter((item, index) => index % 8 === 0).map(item => ({
        date: new Date(item.dt_txt).toLocaleDateString(),
        temp: item.main.temp,
        description: item.weather[0].description,
      }));
      setForecast(dailyForecast);
    }
    setLoading(false);
  };

  return (
    <div className="p-5 flex flex-col items-center min-h-screen bg-gray-100 md:px-10 lg:px-20 w-full max-w-5xl mx-auto">
      <input
        type="text"
        placeholder="Enter city name"
        className="border p-2 rounded w-full max-w-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-5 py-2 my-2 rounded mt-3 hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
        onClick={handleSearch}
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5 w-full justify-center">
        {forecast.map((day, index) => (
          <ForecastCard key={index} forecast={day} />
        ))}
      </div>
    </div>
  );
};

export default Home;