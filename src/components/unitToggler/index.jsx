import { ButtonGroup,ToggleButton } from 'react-bootstrap'

export const UnitToggler = ({isMetric, setIsMetric}) => {
  const toggleButtons = [
    {
      id: 'metric',
      type: 'radio',
      checked: isMetric,
      variant: isMetric? 'dark': 'outline-dark', 
      onChange: () => setIsMetric(true),
      label: 'Metric'
    },
    {
      id: 'imperial',
      type: 'radio',
      checked: !isMetric,
      variant: !isMetric? 'dark': 'outline-dark', 
      onChange: () => setIsMetric(false),
      label: 'Imperial'
    }
  ]

  return (
    <ButtonGroup>
      {toggleButtons.map(tb => (
        <ToggleButton
          key={tb.id}
          id={tb.id}
          type="radio"
          name="radio"
          checked={tb.checked}
          variant={tb.variant}
          onChange={tb.onChange}
        >
        {tb.label}
      </ToggleButton>
      ))}
    </ButtonGroup>
  )
}