import { render, screen } from "@testing-library/react";
import { DividedInfo } from "..";
describe('dividedInfo test', () => {
  const mount = ({labelTop, labelBottom, contentTop, contentBottom}) => render(
    <>
      <DividedInfo
        labelTop={labelTop}
        labelBottom={labelBottom}
        contentTop={contentTop}
        contentBottom={contentBottom}
      />
    </>
  )
  it('should return empty if required params absent', () => {
    const {container} = mount({});
    const elem = container.getElementsByClassName('dividedInfo');
    expect(elem.length).toBe(0);
  })
  it('should return component', () => {
    const mockData = {
      labelTop: 'mock text top',
      labelBottom: 'mock text bottom',
      contentTop: 'mock content top',
      contentBottom: 'mock content bottom'
    }
    const { container } = mount(mockData);
    screen.findByText('mock text top');
    screen.findByText('mock text bottom');
    screen.findByText('mock content top');
    screen.findByText('mock content bottom');
    // eslint-disable-next-line testing-library/no-container
    const dividedInfo = container.getElementsByClassName('dividedInfo');
    expect(dividedInfo.length).toBe(1);
    
  })
});