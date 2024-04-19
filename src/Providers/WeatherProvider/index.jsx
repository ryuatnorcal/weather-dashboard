import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { weatherReducer } from '../../reducers/weatherReducer';
import { useStatus } from '../StatusProvider';
import { useLocation } from '../LocationProvider';

const WeatherContext = createContext(null);
const WeatherDispatchContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [weather, dispatch] = useReducer(
    weatherReducer,
    {
      status: 'uninit'
    }
  )
  const [isMetric, setIsMetric] = useState(true); // metric or imperial
  const { error, updateWeather, setWeatherRequest, setError, setLoading } = useStatus();
  const { searchCity, searchGeoCode, resetSearch } = useLocation();
  useEffect(() => {
    (async () => {
      try {
        if (!error
          && (searchCity || searchGeoCode)
          && updateWeather
          && process.env.REACT_APP_WEATHER_API_KEY
        ) {
          let searchKey = '';
          if (searchGeoCode) {
            searchKey = `${searchGeoCode.lat},${searchGeoCode.lon}`;
          }
          else if (searchCity) {
            searchKey = searchCity;
          }
          setLoading(true);
          const url = `${process.env.REACT_APP_WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchKey}&days=6`;
          const response = await axios({ method: 'GET', url })
          
          const { current, location, forecast } = response.data;
          dispatch({
            type: 'success',
            current,
            location,
            forecast: forecast.forecastday.slice(1),
          });
          setLoading(false);
          resetSearch();
          setWeatherRequest(false);
        }
      } catch (err) {
        const { code, message } = err.response?.data?.error || {};
        setError({
          ...code && message ? { code, message } : err
        });
      };
    })();
  }, [updateWeather, error])
  
  const avelableContextValue = {
    ...weather,
    isMetric,
    setIsMetric
  }

  return (
    <WeatherContext.Provider value={avelableContextValue}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(WeatherContext);
}

export const useWeatherDispatch = () => {
  return useContext(WeatherDispatchContext);
}