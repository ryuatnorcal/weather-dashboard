import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "../../weatherIcon";

describe('WeatherIcon test', () => {
  const mount = ({conditionCode, text, options}) => {
    return render(
      <>
        <WeatherIcon
          conditionCode={conditionCode}
          text = { text }
          options={options}   
        />
      </>
    )
  }
  it('should have icon and text', () => {
    const args = {
      conditionCode: 1000,
      text: 'mock text'
    }
    mount(args);
    screen.getByText('mock text');
    screen.getByAltText('mock text');
  })

  it('should have class shiftUpText when option has shiftUp with true', () => {
    const args = {
      conditionCode: 1000,
      text: 'mock text',
      options: {
        shiftUp: true
      }
    }
    const { container } = mount(args);
    // eslint-disable-next-line testing-library/no-container
    const specialClass = container.getElementsByClassName('shiftUpText');
    expect(specialClass.length).toBe(1);
  });
});