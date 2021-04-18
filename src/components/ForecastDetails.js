import React from "react";
import moment from "moment";
import ForecastSummary from "./ForecastSummary";
import PropTypes from "prop-types;"

const ForecastDetails = ({ forecast }) => {
   const { date, humidity, temperature, wind } = forecast;

   return (
       <div className="forcast-details">
           <p className="forecast-details-date">
               {moment(date).format("ddd Do MMM")}
           </p>
           <p className="forecast-detail_temp">
               <b>Max Temperature:</b>
               {temperature.max}
               &deg;C
           </p>
           <p className="forecast-detail_temp">
               <b>Min Temperature</b>
               {temperature.min}
               &deg;C
           </p>
           <p className="forecast-details_humidity">
                <b>Humidity:</b>
                {`${humidity}%`}
           </p>
           <p className="forecast-details_wind">
                <b>Wind:</b>
                {`${wind.speed}mph`}
           </p>
       </div>
   );

};

export default ForecastDetails;

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number,
        humidity: PropTypes.number,
        temperature: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
          }),
          wind: PropTypes.shape({
            speed: PropTypes.number,
            direction: PropTypes.string,
          }),
        }).isRequired,
      };