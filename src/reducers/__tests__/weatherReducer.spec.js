import { weatherReducer } from "../weatherReducer";

describe('weatherReducer test', () => {
  it('should return add weather when the type is success', () => {
    const mockState = {}
    const mockAction = {
      type: 'success',
      current: {
        name: 'mock current'
      },
      location: {
        name: 'mock location'
      },
      forecast:  [
          { name: 'mock1' },
          {name: 'mock2'}
        ]
    }
    const expectedResult = {
        current: {
          name: 'mock current'
        },
        location: {
          name: 'mock location'
        },
        forecast: [
          { name:'mock1' },
          { name: 'mock2' }
        ],
        status: 'success'
      }
    const reducerCalled = weatherReducer(mockState, mockAction);
    expect(reducerCalled).toEqual(expectedResult);
  });
});