import React, { useEffect, useState } from 'react';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';
import axios from 'axios';

// Temp Disbale Eslint
//* eslint-disable  no-unused-vars *

//import CSS
import '../styles/App.css';


const App = () => {
const [forecasts, setForecast] = useState([]);
const [location, setLocation] = useState({city: "", country: ""});
const [selectedDate, setSelectedDate] = useState(0);
const selectedForecast = forecasts.find(
  (forecast) => forecast.date === selectedDate
);

const handleForecastSelect = (date) => {
  setSelectedDate(date);
};

useEffect(() => {
  getForecast(setSelectedDate, setForecast, setLocation);
}, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries 
      forecasts={forecasts} 
      onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast}/>}
    </div>
  );
};

export default App;


//No longer using prop type as app no longer recieves any props. 
// App.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//       tempreture: PropTypes.shape({
//         max: PropTypes.number,
//         min: PropTypes.number,
//       }),
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
// };