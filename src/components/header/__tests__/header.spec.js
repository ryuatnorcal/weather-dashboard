/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";
import { Header } from "../header";
import mockJSON from '../../../__mocks__/mockWeatherState.json';

describe('Header Test', () => {
  const mount = ({current, location, isMetric, setIsMetric}) => render(
    <>
      <Header
        current={current}
        location={location}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
    </>
  )
  it('should have a city name, unit toggler and date', () => {
    const { current, location } = mockJSON;
    const mockIsMetric = jest.fn();
    mount({ current, location, isMetric: true, setIsMetric: mockIsMetric });
    screen.getByText('Testerazo (Puente Cajon De Gatos) San Luis PotosÃ­, Mexico');
    screen.getByText('Metric');
    screen.getByText('Imperial');
    screen.getByText('Wed, Apr 17 2024')
  })
});