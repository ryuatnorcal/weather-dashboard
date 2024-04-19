import { useLocation } from "."
export const LocalProviderTest = () => {
  const {
    suggestedLocations,
    inputValue,
    searchCity,
    searchGeoCode,
    setSuggestedLocations,
    setInputValue,
    onChangeInputValue,
    submitLocation,
    resetSearch,
    setSearchCity,
    setSearchGeoCode
  } = useLocation();

  const mockEvnet = {
      target: {
        value: 'mock change value'
      }
  }
  
  return (
  
      <div>
        <div data-testid='suggestedLocations' onClick={() => setSuggestedLocations('mock city')}>{suggestedLocations}</div>
        <div data-testid='inputValue' onClick={() => setInputValue('mock input')}>{inputValue}</div>
        <div data-testid='searchCity' onClick={() => setSearchCity('mock search city')}>{searchCity}</div>
        <div data-testid='searchGeoCode' onClick={() => setSearchGeoCode('mock geo code')}>{searchGeoCode}</div>
        <div data-testid='onChangeInputValue' onClick={() => onChangeInputValue(mockEvnet)}>{inputValue}</div>
      <div data-testid='resetSearch' onClick={() => resetSearch()}>{`${searchCity},${searchGeoCode}`}</div>
      <div data-testid='submitLocation' onClick={() => submitLocation()}>{searchCity}</div>

      </div>
  )
}