import { UnitToggler } from '../unitToggler'
import { getDate, getCityName } from '../../utils/util'
import './styles.css'

export const Header = ({current, location, isMetric, setIsMetric}) => {
  return (
    <div id="header">
        <div className="cityName">
          {getCityName(location)}
        </div>
        <UnitToggler
          isMetric={isMetric}
          setIsMetric={setIsMetric}
        />
      <div>
        { getDate(current.last_updated, 'ddd, MMM DD YYYY') }
      </div>
    </div>
  )
}