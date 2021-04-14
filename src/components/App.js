import React from 'react';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={props.location.city} country={props.location.country}/>
    </div>
  );
}

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};