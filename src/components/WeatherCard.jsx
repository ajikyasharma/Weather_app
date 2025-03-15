import React from 'react';
import { motion } from 'framer-motion';

const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="text-red-500">City not found!</p>;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg rounded-lg p-5 max-w-sm w-full mx-auto"
    >
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <p className="text-gray-200">{weather.weather[0].description}</p>
      <p className="text-lg font-semibold">Temp: {weather.main.temp}°C</p>
    </motion.div>
  );
};

export default WeatherCard;