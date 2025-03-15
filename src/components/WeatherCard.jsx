import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="text-red-500">City not found!</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-5 max-w-sm w-full mx-auto">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-gray-600">{weather.weather[0].description}</p>
      <p className="text-lg font-semibold">Temp: {weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherCard;