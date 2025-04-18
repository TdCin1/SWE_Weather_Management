import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaCog, FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt, FaExclamationTriangle } from 'react-icons/fa';
import 'animate.css';
import axios from 'axios';

const getWeatherIcon = (weather) => {
  let animation = '';
  switch(weather.toLowerCase()) {
    case 'clear':
      animation = 'animate__animated animate__pulse animate__infinite';
      return <FaSun size={24} className={`text-warning ${animation}`} />;
    case 'clouds':
      animation = 'animate__animated animate__fadeIn';
      return <FaCloud size={24} className={`text-secondary ${animation}`} />;
    case 'rain':
      animation = 'animate__animated animate__shakeY';
      return <FaCloudRain size={24} className={`text-primary ${animation}`} />;
    case 'snow':
      animation = 'animate__animated animate__fadeIn animate__infinite';
      return <FaSnowflake size={24} className={`text-info ${animation}`} />;
    case 'thunderstorm':
      animation = 'animate__animated animate__flash';
      return <FaBolt size={24} className={`text-danger ${animation}`} />;
    default:
      return <FaCloud size={24} className="animate__animated animate__fadeIn" />;
  }
};

const getPrecipitationColor = (pop) => {
  if (pop <= 0.2) return '#A3C940';
  if (pop <= 0.5) return '#F9D423';
  if (pop <= 0.7) return '#F8A055';
  return '#E84C3D';
};

const getWeatherColor = (weather) => {
  switch(weather.toLowerCase()) {
    case 'clear': return 'bg-warning bg-opacity-10';
    case 'clouds': return 'bg-secondary bg-opacity-10';
    case 'rain': return 'bg-primary bg-opacity-10';
    case 'snow': return 'bg-info bg-opacity-10';
    case 'thunderstorm': return 'bg-danger bg-opacity-10';
    default: return 'bg-light';
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [zipcode, setZipCode] = useState("32601");
  const [county, setCounty] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [showHourly, setShowHourly] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    setShowSettings(false);
    fetchWeatherData(zipcode);
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setZipCode(value);
    }
  };

  const [sunTimes, setSunTimes] = useState({ sunrise: 'N/A', sunset: 'N/A' });

  const fetchWeatherData = async (zip) => {
    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=97caa8dc645a6ca8fc4a2f613bedc342&units=imperial`
      );
      
      setSunTimes({
        sunrise: new Date(currentResponse.data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        sunset: new Date(currentResponse.data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=97caa8dc645a6ca8fc4a2f613bedc342&units=imperial`
      );
      
      const hourly = [];
      for (let i = 0; i < forecastResponse.data.list.length - 1; i++) {
        const current = forecastResponse.data.list[i];
        const next = forecastResponse.data.list[i + 1];
        
        hourly.push({
          time: new Date(current.dt * 1000).toLocaleTimeString([], {hour: '2-digit'}),
          temp: Math.round(current.main.temp),
          weather: current.weather[0].main,
          description: current.weather[0].description,
          windSpeed: Math.round(current.wind.speed),
          windDeg: current.wind.deg,
          humidity: current.main.humidity,
          pop: current.pop || 0
        });

        const currentTime = new Date(current.dt * 1000);
        const nextTime = new Date(next.dt * 1000);
        const hoursBetween = (nextTime - currentTime) / (1000 * 60 * 60);
        
        if (hoursBetween > 1) {
          for (let h = 1; h < hoursBetween; h++) {
            const interpTime = new Date(currentTime.getTime() + h * 60 * 60 * 1000);
            const interpFactor = h / hoursBetween;
            
            hourly.push({
              time: interpTime.toLocaleTimeString([], {hour: '2-digit'}),
              temp: Math.round(current.main.temp + (next.main.temp - current.main.temp) * interpFactor),
              weather: current.weather[0].main,
              description: current.weather[0].description,
              windSpeed: Math.round(current.wind.speed + (next.wind.speed - current.wind.speed) * interpFactor),
              windDeg: current.wind.deg,
              humidity: Math.round(current.main.humidity + (next.main.humidity - current.main.humidity) * interpFactor),
              pop: current.pop || 0
            });
          }
        }
      }
      setHourlyData(hourly);

      const dailyData = {};
      forecastResponse.data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
          dailyData[date] = {
            minTemp: item.main.temp_min,
            maxTemp: item.main.temp_max,
            weather: item.weather[0].main,
            description: item.weather[0].description,
            pop: item.pop || 0
          };
        } else {
          dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp_min);
          dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp_max);
          dailyData[date].pop = Math.max(dailyData[date].pop || 0, item.pop || 0);
        }
      });
      
      setWeatherData(Object.entries(dailyData).slice(0, 10));
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeatherData(zipcode);
  }, [zipcode]);

  const currentHour = new Date().getHours();
  const isDaytime = currentHour > 6 && currentHour < 18;
  
  return (
    <div className={`min-vh-100 ${isDaytime ? 'bg-day' : 'bg-night'}`}>
      <style jsx>{`
        .bg-day {
          background: linear-gradient(135deg, #e0f7fa 0%, #80deea 50%, #4dd0e1 100%);
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
        }
        .nav-top {
          padding: 15px 20px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
        }
        .nav-bottom {
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 15px 0;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }
        .bg-night {
          background: linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%);
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
        }
        .card {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .card:not(.current-weather):hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
        }
        .current-weather {
          background: rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>

      <div className="nav-top d-flex justify-content-between align-items-center">
        <h1 className="display-6 m-0">Weather Dashboard</h1>
        <div className="d-flex align-items-center">
          {showSettings && (
            <div className="settings-form bg-white p-3 rounded shadow me-2" style={{width: '300px', zIndex: 1000}}>
              <form onSubmit={handleSettingsSubmit} className="text-left">
                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    className="form-control mx-auto"
                    id="zipcode"
                    value={zipcode}
                    onChange={handleZipCodeChange}
                    required
                    style={{ width: '200px' }} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="county">County</label>
                  <input
                    type="text"
                    className="form-control mx-auto"
                    id="county"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    required
                    style={{ width: '200px' }} 
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update</button>
              </form>
            </div>
          )}
          <button 
            className="btn btn-light"
            onClick={() => setShowSettings(!showSettings)}
          >
            <FaCog /> Settings
          </button>
        </div>
      </div>

      <div className="container text-center pt-3 pb-5">
        {weatherData.length > 0 && weatherData[0][1].weather === 'thunderstorm' && (
          <div className="alert alert-warning animate__animated animate__headShake">
            <FaExclamationTriangle className="me-2" />
            Severe Weather Alert: Thunderstorm warning in your area
          </div>
        )}

        {weatherData.length > 0 && (
          <div className="current-weather card mb-4 animate__animated animate__fadeIn">
            <div className="card-body text-center">
              <h2 className="mb-3">Current Weather</h2>
              <div className="d-flex justify-content-center align-items-center mb-3">
                {getWeatherIcon(weatherData[0][1].weather)}
                <span className="display-4 ms-3">
                  {Math.round((weatherData[0][1].maxTemp + weatherData[0][1].minTemp)/2)}°F
                </span>
              </div>
              <h4 className="text-capitalize mb-3">{weatherData[0][1].description}</h4>
              
              <div className="row text-center">
                <div className="col">
                  <div className="small text-muted">Sunrise</div>
                  <div>{sunTimes.sunrise}</div>
                </div>
                <div className="col">
                  <div className="small text-muted">Sunset</div>
                  <div>{sunTimes.sunset}</div>
                </div>
                <div className="col">
                  <div className="small text-muted">Wind</div>
                  <div>{hourlyData[0]?.windSpeed} mph</div>
                </div>
                <div className="col">
                  <div className="small text-muted">Humidity</div>
                  <div>{hourlyData[0]?.humidity}%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-3">
          <button 
            className={`btn ${isDaytime ? 'btn-outline-dark' : 'btn-outline-light'}`}
            onClick={() => setShowHourly(!showHourly)}
            style={{fontWeight: '600', borderWidth: '2px', transition: 'all 0.3s ease'}}
          >
            {showHourly ? 'Show Daily Forecast' : 'Show Hourly Forecast'}
          </button>
        </div>

        {showHourly && (
          <div className="hourly-forecast mb-4">
            <h3>Hourly Forecast</h3>
            <div className="d-flex justify-content-center flex-wrap gap-3 py-2">
              {hourlyData.slice(0, 24).map((hour, index) => (
                <div key={index} className="text-center px-2">
                  <div className="fw-bold">{hour.time}</div>
                  <div className="my-2">{getWeatherIcon(hour.weather)}</div>
                  <div>{hour.temp}°F</div>
                  <div className="small text-muted">
                    <span className="d-inline-block me-1" style={{transform: `rotate(${hour.windDeg}deg)`, transition: 'transform 0.3s ease'}}>↑</span>
                    {hour.windSpeed} mph
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row mt-4 g-3">
          {weatherData.map(([date, forecast], index) => (
            <div key={index} className="col-md-2 col-sm-4 col-6 mb-3">
              <div className="card h-100">
                <div className={`card-body ${getWeatherColor(forecast.weather)} p-3`}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{date}</h5>
                    {getWeatherIcon(forecast.weather)}
                  </div>
                  <p className="card-text text-capitalize mb-3">{forecast.description}</p>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-danger fw-bold">{Math.round(forecast.maxTemp)}°F</span>
                    <span className="text-primary fw-bold">{Math.round(forecast.minTemp)}°F</span>
                  </div>
                  <div className="precip-progress mb-2">
                    <div className="precip-label small text-muted">Precipitation: {Math.round((forecast.pop || 0) * 100)}%</div>
                    <div className="progress" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-info" 
                        role="progressbar" 
                        style={{
                          width: `${Math.min((forecast.pop || 0) * 100, 100)}%`,
                          backgroundColor: getPrecipitationColor(forecast.pop || 0)
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="nav-bottom">
        <div className="container d-flex justify-content-between">
          <button className="btn btn-info" onClick={() => navigate("/weather-map")}>
            Go to Weather Map
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
           <button className="btn btn-info" onClick={() => navigate("/recommendation")}>
            Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
