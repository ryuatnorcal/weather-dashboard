import { render, screen } from "@testing-library/react"
import { ErrorMessage } from ".."

describe('Error Message test', () => {
  const mount = ({error, customMessage}) => {
    return render(
      <>
        <ErrorMessage error={ error } customMessage={customMessage}/>
      </>
    )
  }
  it('should return nothing when error and customMessage are undefiend', () => {
    const { container } = mount({ error: undefined, customMessage: undefined });
    const elem = container.getElementsByTagName('div');
    expect(elem.length).toBe(0);
  })
  it('should show error message when error object is present', () => { 
    mount({ error: { code: 1005 } });
    screen.getByText('We could not retirive data. Please try with another location.')
  })
  it('should show error message when customMessage is set', () => {
    mount({ customMessage: 'mock error' });
    screen.getByText('mock error');
  })
})