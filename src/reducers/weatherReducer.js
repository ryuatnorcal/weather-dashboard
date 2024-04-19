export const weatherReducer = (state, action) => {
  if (action.type === 'success') {
    return {
      ...state,
      current: action.current,
      location: action.location,
      forecast: action.forecast,
      status: action.type
    } 
  }
}