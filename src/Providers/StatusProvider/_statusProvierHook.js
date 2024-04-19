/* istanbul ignore file */
/**
 * This file should be inside of __tests__ folder,
 * however, test configure this time doesn't skip this file. 
 * so temporary purpose, I just put it out side of test folder.
 */
import { useStatus } from "."

export const StatusProviderTest = () => {
  const {
    error,
    updateWeather,
    isLoading,
    isValidAccess,
    setError,
    setWeatherRequest,
    setLoading,
    setValidAccess
  } = useStatus();
  return (
    <div>
      <div data-testid='error' onClick={() => setError('error')}>{`${error}`}</div>
      <div data-testid='weatherRequest' onClick={() => setWeatherRequest(true)}>{`${updateWeather}`}</div>
      <div data-testid='loading' onClick={() => setLoading(true)}>{`${isLoading}`}</div>
      <div data-testid='validAccess' onClick={() => setValidAccess(true)}>{`${isValidAccess}`}</div>
    </div>
  )
}