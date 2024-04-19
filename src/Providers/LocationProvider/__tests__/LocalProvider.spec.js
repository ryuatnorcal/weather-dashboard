// import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatusProvider } from '../../StatusProvider';
import { LocationProvider } from '..';
import { useGeolocated } from "react-geolocated";
import { LocalProviderTest } from '../_localProviderTest';

// jest.mock('axios');
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

describe('Location Provider test', () => {
  const mount = (children) => {
    render(
      <StatusProvider>
        <LocationProvider>
          {children}
        </LocationProvider>
      </StatusProvider>
    )
  }
  it('should hold correct child component', () => {
    const mockComponent = (
      <div>Mock Component</div>
    )
    mount(mockComponent, {});
    screen.getAllByText('Mock Component');
  })

  it('should change values by calling setters', () => {
    mount(<LocalProviderTest />)

    fireEvent.click(screen.getByTestId('suggestedLocations'));
    expect(screen.getByTestId('suggestedLocations').textContent).toBe('mock city');
    fireEvent.click(screen.getByTestId('inputValue'));
    expect(screen.getByTestId('inputValue').textContent).toBe('mock input');
    fireEvent.click(screen.getByTestId('searchCity'));
    expect(screen.getByTestId('searchCity').textContent).toBe('mock search city');
    fireEvent.click(screen.getByTestId('searchGeoCode'));
    expect(screen.getByTestId('searchGeoCode').textContent).toBe('mock geo code');
    fireEvent.click(screen.getByTestId('onChangeInputValue'));
    expect(screen.getByTestId('onChangeInputValue').textContent).toBe('mock change value');
    fireEvent.click(screen.getByTestId('resetSearch'));
    expect(screen.getByTestId('resetSearch').textContent).toBe('null,null');

    fireEvent.click(screen.getByTestId('searchCity'));
    fireEvent.click(screen.getByTestId('submitLocation'))
    expect(screen.getByTestId('searchCity').textContent).toBe('mock change value');

    // fireEvent.click(screen.getByTestId('getCurrentLocation'));
    // expect(screen.getByTestId('searchGeoCode').textContent).toBe('null,null');
  })
})
