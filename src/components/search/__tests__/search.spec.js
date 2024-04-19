import { fireEvent, render, screen } from "@testing-library/react";
import { useGeolocated } from "react-geolocated"; 
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "../../../Providers/LocationProvider";
import { StatusProvider } from "../../../Providers/StatusProvider";
import { Search } from "..";

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

describe('Search test', () => {
  const mount = (children) => {
    return render(
      <StatusProvider>
        <LocationProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </LocationProvider>
      </StatusProvider>
    )
  }
  it('should show', () => {
    const { container } = mount(
      <Search isSticky={false} />
    )
    
    screen.getByText('Use Current Location');
    screen.getByText('Lookup');
    // eslint-disable-next-line testing-library/no-container
    fireEvent.click(container.getElementsByClassName('locationButton')[0]);
    const input = screen.getByPlaceholderText('Please type your city');
    fireEvent.change(input, { target: { value: 'Auckland' } });
    expect(input.value).toBe('Auckland');
    fireEvent.click(screen.getByText('Lookup'));
    expect(container).not.toContain('Sorry');
  })
})