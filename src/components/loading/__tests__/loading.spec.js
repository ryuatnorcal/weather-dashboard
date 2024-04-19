import { render, screen } from "@testing-library/react";
import { Loading } from "..";
describe('loading screen', () => {
  const mount = () => render(
    <>
      <Loading />
    </>
  )

  it('should have a loading message', () => {
    mount();
    screen.getByText('Loading new weather information, plase wait...');
  })
});