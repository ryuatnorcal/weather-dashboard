import { AppRouter } from '../../router'
import { WeatherProvider } from '../../../Providers/WeatherProvider'
import { LocationProvider } from '../../../Providers/LocationProvider'
import { StatusProvider } from '../../../Providers/StatusProvider'

export const LayoutContainer = () => {
  return (
    <StatusProvider>
      <LocationProvider>
        <WeatherProvider>
          <AppRouter />
        </WeatherProvider>
      </LocationProvider>
    </StatusProvider>
  ) 
}