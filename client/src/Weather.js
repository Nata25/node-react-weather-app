import React from 'react';

function Weather () {
  const [{ current, location }, setState] = React.useState({});

  React.useEffect(() => {
    fetch('/api/current')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setState(data);
      });
  }, []);

  return (
    <div className="weather">
      <h1 className="title">Weather app</h1>
      {(current && location) &&
          <section>
            <h2>
              Weather for:
                <span className="location-name">
                  { location.name }
                </span>
            </h2>
            <p>Location: {location.country}</p>
            <p>lng: {location.lon}</p>
            <p>lat: {location.lat}</p>
            <p>Weather now ({current.observation_time}):</p>
            <div className="weather-summary">
              <img alt="weather-icon" className="weather-icon" src={current.weather_icons} />
              <ul className="params-list">
                {current.weather_descriptions.map(desc => <li key={desc}>{desc}</li>)}
                <li key="cloudcover">Cloudcover: {current.cloudcover} %</li>
                <li key="humidity">Humidity: {current.humidity} %</li>
                <li key="temperature">Temperature: {current.temperature} °C</li>
                <li key="visibility">Visibility: {current.visibility}</li>
              </ul>
            </div>
          </section>}
      {!(current && location) && <div>Loading data...</div>}
    </div>
  )
}

export default Weather;
