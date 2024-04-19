import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Header } from '../header/header'
import { WeatherIcon } from '../weatherIcon'
import { DividedInfo } from '../dividedInfo'
import { WeekForcast } from '../weekForcast'
import { Temperature } from '../temperature'
import { useWeather } from '../../Providers/WeatherProvider'
import { useStatus } from '../../Providers/StatusProvider'
import { WEATHER_LABELS, CURRENT_WEATHER_LABELS } from '../../const'
import './styles.css'

export const Weather = () => {
  const navigate = useNavigate();
  
  const {
    current,
    forecast,
    location,
    status,
    isMetric,
    setIsMetric } = useWeather();
  const { error, isValidAccess } = useStatus();
  /**
   * following useEffect prevent user from just access to /weather page
   * If the user land /weather without search or use geo function ends up 
   * redirected to index page 
   */
  useEffect(() => {
    if (!isValidAccess) {
      navigate('/');
    }
  }, [isValidAccess]);

  if (error) return;
  return (status === 'success' && (
    <Container id="weatherPage">
      <Header
        isMetric={isMetric}
        setIsMetric={setIsMetric}
        current={current}
        location={location}
      />
        <Row>
          <Col sm={3}>
            <WeatherIcon
              conditionCode={current.condition.code}
              text={current.condition.text}
              options={{
                shiftUp: true
              }}
            />
          </Col>
        <Col sm={9}>
          <div className="currentWeatherInfoContainer">
            <Temperature
              temp={ isMetric ? current.temp_c : current.temp_f }
              attr={ isMetric? WEATHER_LABELS.c: WEATHER_LABELS.f }
            />
            <DividedInfo
              labelTop={ CURRENT_WEATHER_LABELS.labelTop }
              labelBottom={ CURRENT_WEATHER_LABELS.labelBottom }
              contentTop={`${current.humidity} %`}
              contentBottom={ isMetric ? `${current.wind_kph}kph ${current.wind_dir}` : `${current.wind_mph}mph ${current.wind_dir}`}
            />             
          </div>
          </Col>
        </Row>
        <Row>
        <Col>
          <WeekForcast
            forecast={ forecast }
            isMetric={ isMetric }
          />
          </Col>
        </Row>
      </Container>
    )
  )
}