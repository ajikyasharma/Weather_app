import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../api';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    const data = await fetchWeather(city);
    if (data) {
      setWeather(data);
    } else {
      setError('City not found');
    }
    setLoading(false);
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter city name"
        className="border p-2 rounded w-64"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={handleSearch}
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
