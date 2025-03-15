# React Weather App

This is a simple weather forecasting app built using React and OpenWeather API. The app allows users to search for weather details of a city and view a 5-day forecast.

## Features
- Fetch real-time weather data from OpenWeather API
- Display current weather details
- Show a 5-day weather forecast
- Animated UI with `framer-motion`
- Responsive design for mobile, tablet, and desktop
- Gradient background and hover effects

## Installation & Setup

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### Step 1: Clone the Repository
```sh
git clone https://github.com/your-repository/weather-app.git
cd weather-app
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 3: Create an `.env` File
Create a `.env` file in the root directory and add your OpenWeather API key:
```sh
VITE_WEATHER_API_KEY=your_api_key_here
```

You can get a free API key from [OpenWeather](https://openweathermap.org/api).

### Step 4: Start the Application
```sh
npm run dev
```
The app will be available at `http://localhost:5173/`.

## Project Structure
```
react-weather-app/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── ForecastCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── .env
│── package.json
│── README.md
```

## API Integration
The app fetches weather data from OpenWeather API using Axios.

### Fetch Current Weather
```js
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
```

### Fetch 5-Day Forecast
```js
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
```

## Technologies Used
- React.js
- Vite
- Tailwind CSS
- Axios
- Framer Motion (for animations)

## Contributing
Feel free to fork the repository and submit pull requests with improvements.

## License
This project is licensed under the MIT License.

