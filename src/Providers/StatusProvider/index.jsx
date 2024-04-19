import { createContext, useContext, useState, useEffect } from 'react';

export const StatusContext = createContext(null);

export const StatusProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [updateWeather, setWeatherRequest] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isValidAccess, setValidAccess] = useState(false);
  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const statusContextValue = {
    error,
    updateWeather,
    isLoading,
    isValidAccess,
    setError,
    setWeatherRequest,
    setLoading,
    setValidAccess
  }
  return (
    <StatusContext.Provider value={statusContextValue}>
      {children}
    </StatusContext.Provider>
  )
}

export const useStatus = () => {
  return useContext(StatusContext);
}