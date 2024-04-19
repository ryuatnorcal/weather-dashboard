import { render, screen } from "@testing-library/react";
import { useGeolocated } from "react-geolocated";
import { BrowserRouter } from "react-router-dom";
import { WeatherProvider, useWeather } from "../../../Providers/WeatherProvider";
import { LocationProvider } from "../../../Providers/LocationProvider";
import { StatusProvider, useStatus } from "../../../Providers/StatusProvider";
import { Weather } from "..";
// eslint-disable-next-line jest/no-mocks-import
import { mockCurrent, mockForecast,mockLocation } from "../../../__mocks__/mockWeather";


jest.mock('../../../Providers/WeatherProvider', () => ({
  ...jest.requireActual('../../../Providers/WeatherProvider'),
  useWeather: () => {
    return {
      current: mockCurrent,
      location: mockLocation,
      forecast: mockForecast,
      isMetric: true,
      status:'success',
      setIsMetric: ()=> jest.fn()
    }
  }
}));

jest.mock('../../../Providers/StatusProvider', () => ({
  ...jest.requireActual('../../../Providers/StatusProvider'),
  useStatus: () => {
    return {
      error: undefined,
      updateWeather: false,
      isLoading: false,
      isValidAccess: true,
      setError: ()=> jest.fn(),
      setWeatherRequest:()=> jest.fn(),
      setLoading:()=> jest.fn(),
      setValidAccess:()=> jest.fn()
    }
  }
}));

jest.mock('react-geolocated', () => ({
  useGeolocated: () => {
    return {
      coords: {
        lat: 0,
        lon: 0
      },
      isGeolocationAvailable: true,
      isGeolocationEnabled: true
    }
  }
}));

describe('Weather page componet', () => {
  const mount = (children) => {
    return render(
      <StatusProvider>
        <LocationProvider>
          <WeatherProvider>
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </WeatherProvider>
        </LocationProvider>
      </StatusProvider>
    )
  }
  
  it('Should display as expected', () => {
    const { container } = mount(
      <Weather />
    )
   
    screen.getByText(/Humidity/);
    screen.getByText(/Wind Speed/);
    screen.getByText(/Testerazo/);
    screen.getByText(/Wind Speed/);
    expect(container).toMatchSnapshot();

  })
})
