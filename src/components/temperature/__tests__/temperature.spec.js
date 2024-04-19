import { render, screen } from "@testing-library/react";
import { Temperature } from "..";

describe('Temperture test', () => {
  const mount = ({temp, attr}) => render(
    <>
      <Temperature
        temp={temp}
        attr={attr}
      />
    </>
  )

  it('should show temp and degree', () => {
    mount({ temp: 24, attr: '°C' });
    screen.getAllByText('24');
    screen.getAllByText('°C');
  })
})