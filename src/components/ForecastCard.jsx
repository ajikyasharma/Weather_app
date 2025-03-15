import React from 'react';

const ForecastCard = ({ forecast }) => {
  return (
    <div className="bg-gray-200 p-3 rounded-md shadow-md text-center w-32">
      <p className="font-bold">{forecast.date}</p>
      <p>{forecast.temp}°C</p>
      <p className="text-sm text-gray-600">{forecast.description}</p>
    </div>
  );
};

export default ForecastCard;
