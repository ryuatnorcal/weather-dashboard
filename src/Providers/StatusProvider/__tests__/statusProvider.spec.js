import { render, screen, fireEvent } from "@testing-library/react";
import { StatusProvider } from '..';
import { StatusProviderTest } from "../_statusProvierHook";

describe('Weather Provider test', () => {
  const mount = (component) => {
    return render(
      <StatusProvider>
        {component}
      </StatusProvider>
    )
  }

  it('should hold correct values', () => {
    const mockComponent = (
      <div>Mock Component</div>
    )
    mount(mockComponent, {});
    screen.getAllByText('Mock Component');
  })
  it('should return valid values when it uses useStatus', () => {
    const mockComponent = (
      <StatusProviderTest />
    )
    mount(mockComponent, {});
    
    fireEvent.click(screen.getByTestId('error'));
    expect(screen.getByTestId('error').textContent).toBe('error');
    fireEvent.click(screen.getByTestId('weatherRequest'));
    expect(screen.getByTestId('weatherRequest').textContent).toBe('true');
    fireEvent.click(screen.getByTestId('loading'));
    expect(screen.getByTestId('loading').textContent).toBe('true');
    fireEvent.click(screen.getByTestId('validAccess'));
    expect(screen.getByTestId('validAccess').textContent).toBe('true');
  })
});