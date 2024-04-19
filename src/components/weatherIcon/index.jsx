import './styles.css'
export const WeatherIcon = ({ conditionCode, text, options = {} }) => {
  const { shiftUp } = options;
  const weatherIcon = `/weather-icons/${conditionCode}.svg`;
  return (
    <div className='weatherIcon'>
      <img src={weatherIcon} alt={text} />
      <div className={`text ${shiftUp ? 'shiftUpText': ' '}`}>
        {text}
      </div>
    </div>
  )
}