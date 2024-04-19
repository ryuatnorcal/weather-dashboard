import { render, screen, fireEvent } from "@testing-library/react";
import { UnitToggler } from "..";
describe('UnitToggler test', () => {
  const mount = ({isMetric, setIsMetric}) => render(
    <>
      <UnitToggler
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
    </>
  )
  it('should have metric and imperial button', () => { 
    mount({isMetric: true, setIsMetric: ()=>{}})
    screen.getByText('Metric')
    screen.getByText('Imperial')
  })

  it('should call setIsMetric with false when user click Imperial', () => {
    const mockSetIsMetric = jest.fn();
    mount({ isMetric: true, setIsMetric: mockSetIsMetric });
    fireEvent.click(screen.getByText('Imperial'));
    expect(mockSetIsMetric).toHaveBeenCalledWith(false);
  })

  it('should call setIsMetric with true when user click Metric', () => {
    const mockSetIsMetric = jest.fn();
    mount({ isMetric: false, setIsMetric: mockSetIsMetric });
    fireEvent.click(screen.getByText('Metric'));
    expect(mockSetIsMetric).toHaveBeenCalledWith(true);
  })
})