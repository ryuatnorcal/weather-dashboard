import { WeatherIcon } from '../weatherIcon'
import { DividedInfo } from '../dividedInfo'
import { getDate } from '../../utils/util'
import { WEATHER_LABELS } from '../../const'
import './styles.css'

export const WeekForcast = ({ forecast, isMetric }) => {
  const fivedaysforcast = forecast.map((fc, i) => {
    return (
      <div key={i} className="forcastCard">
        <div>
          {getDate(fc.date,'ddd D')}
        </div>
        <div>
          <WeatherIcon
            conditionCode={fc.day.condition.code}
            text={fc.day.condition.text}
          />
        </div>
        <div className="tempContainer">
          <DividedInfo
            labelTop={WEATHER_LABELS.high}
            labelBottom={WEATHER_LABELS.low}
            contentTop={isMetric? fc.day.maxtemp_c : fc.day.maxtemp_f}
            contentBottom={isMetric? fc.day.mintemp_c : fc.day.mintemp_f}
          />
          <div className="degree">
            {isMetric ? WEATHER_LABELS.c : WEATHER_LABELS.f}
          </div>
        </div>
      </div>
    )
  })

  return (
    <section id="weekForcast">
      {fivedaysforcast}
    </section>
  )
}