import React from 'react';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

const App = (props) => {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};