import { render, screen } from "@testing-library/react";
import { WeekForcast } from "..";

describe('WeekForcast test', () => {
  const mount = ({forecast, isMetric}) => render(
    <>
      <WeekForcast
        forecast={forecast}
        isMetric={isMetric}
      />
    </>
  )

  it('should render metric infomation when isMetric is ture', () => {
    const mockForecast = {
      forecast: [
        {
          "date": "2024-04-17",
          "date_epoch": 1713312000,
          "day": {
            "maxtemp_c": 3.0,
            "maxtemp_f": 37.4,
            "mintemp_c": -3.6,
            "mintemp_f": 25.5,
            "avgtemp_c": -0.7,
            "avgtemp_f": 30.7,
            "maxwind_mph": 23.7,
            "maxwind_kph": 38.2,
            "totalprecip_mm": 0.1,
            "totalprecip_in": 0.0,
            "totalsnow_cm": 0.0,
            "avgvis_km": 8.3,
            "avgvis_miles": 5.0,
            "avghumidity": 53,
            "daily_will_it_rain": 0,
            "daily_chance_of_rain": 0,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 16,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "uv": 3.0
          }
        }
      ],
      isMetric: true
    }

    mount(mockForecast);
    screen.getByText('°C');
    screen.getByText('3');
    screen.getByText('-3.6');
    screen.getByText('Overcast');
    screen.getByText('Tue 16');
  });

  it('should render imperial infomation when isMetric is false', () => {
    const mockForecast = {
      forecast: [
        {
          "date": "2024-04-17",
          "date_epoch": 1713312000,
          "day": {
            "maxtemp_c": 3.0,
            "maxtemp_f": 37.4,
            "mintemp_c": -3.6,
            "mintemp_f": 25.5,
            "avgtemp_c": -0.7,
            "avgtemp_f": 30.7,
            "maxwind_mph": 23.7,
            "maxwind_kph": 38.2,
            "totalprecip_mm": 0.1,
            "totalprecip_in": 0.0,
            "totalsnow_cm": 0.0,
            "avgvis_km": 8.3,
            "avgvis_miles": 5.0,
            "avghumidity": 53,
            "daily_will_it_rain": 0,
            "daily_chance_of_rain": 0,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 16,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "uv": 3.0
          }
        }
      ],
      isMetric: false
    }

    mount(mockForecast);
    screen.getByText('°F');
    screen.getByText('37.4');
    screen.getByText('25.5');
    screen.getByText('Overcast');
    screen.getByText('Tue 16');
  });
})