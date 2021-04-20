import React, { useState } from 'react';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

// Temp Disbale Eslint
//* eslint-disable  no-unused-vars *

//import CSS
import '../styles/App.css';


const App = ({ forecasts, location }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
  forecast => forecast.date === selectedDate);

const handleForecastSelect = (date) => {
  setSelectedDate(date);
};

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries 
      forecasts={forecasts} 
      onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast}/>
    </div>
  );
};

export default App;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      tempreture: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};