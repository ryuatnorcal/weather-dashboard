/* istanbul ignore file */
/**
 * This file should be inside of __tests__ folder,
 * however, test configure this time doesn't skip this file. 
 * so temporary purpose, I just put it out side of test folder.
 */
import { useWeather } from ".";
import { useStatus } from "../StatusProvider";
import { useLocation } from "../LocationProvider";
import { useEffect } from "react";

export const WeatherProviderTest = () => {
  const {
    current,
    location,
    forecast,
    isMetric,
    setIsMetric } = useWeather();
  const { setWeatherRequest, setError } = useStatus();
  const { setSearchCity } = useLocation();
  useEffect(() => {
    setError(null);
    setSearchCity('Calgary');
  },[setSearchCity])
  
  return (
    <div>
      <div data-testId='metric' onClick={() => setIsMetric(false)}>{`${isMetric}`}</div>
      <div data-testId='weatherRequest' onClick={() => setWeatherRequest(true)}>weather request</div>
      {current && (<div data-testId='current'>{Object.keys(current).length}</div>)}
      {location && (<div data-testId='location'>{Object.keys(location).length}</div>)}
      {forecast && (<div data-testId='forecast'>{Object.keys(forecast).length}</div>)}
    </div>
  )
}