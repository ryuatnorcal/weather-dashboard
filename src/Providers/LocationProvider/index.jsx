import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";
import { useStatus } from '../StatusProvider';

import {
  GEO_LOCATION_DISABLED,
  GEO_LOCATION_NOT_AVAILABE
} from '../../const';

export const LocationContext = createContext(null);

export const LocationProvider = ({children}) => {
  const [suggestedLocations, setSuggestedLocations] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchCity, setSearchCity] = useState(null);
  const [searchGeoCode, setSearchGeoCode] = useState(null);
  const { setError, setWeatherRequest } = useStatus()
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
  });

  const onChangeInputValue = async (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 3) {
      try {
        const url = `${process.env.REACT_APP_WEATHER_API_URL}/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${event.target.value}`;
        const response = await axios({ method: 'GET', url })
        setSuggestedLocations(response?.data)
      } catch (err) {
        const { error } = err.response?.data
        setError(error);
      }
    }
    else {
      setSuggestedLocations([])
    }
  }

  const submitLocation = () => {
    if(inputValue.length < 3) return
    setSuggestedLocations([])
    setInputValue('');
    setWeatherRequest(true);
    setSearchCity(inputValue);
  }


  const getCurrentLocation = () => {
    if (!isGeolocationEnabled) {
      setError({
        message: GEO_LOCATION_DISABLED
      });
      return;
    };
    if (!isGeolocationAvailable) {
      setError({
        message: GEO_LOCATION_NOT_AVAILABE
      });
      return;
    }
    const { latitude, longitude } = coords;
    setSuggestedLocations([]);
    setInputValue('');
    setSearchGeoCode({
      lat: latitude,
      lon: longitude
    });
    setWeatherRequest(true);
  }

  const resetSearch = () => {
    setSearchGeoCode(null);
    setSearchCity(null);
  }

  const locationContextValue = {
    suggestedLocations,
    inputValue,
    searchCity,
    searchGeoCode,
    setSuggestedLocations,
    setInputValue,
    onChangeInputValue,
    submitLocation,
    getCurrentLocation,
    resetSearch,
    setSearchCity,
    setSearchGeoCode
  }
  
  return (
    <LocationContext.Provider value={locationContextValue}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => {
  return useContext(LocationContext);
}