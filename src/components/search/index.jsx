import { useEffect} from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {
  useNavigate,
  useLocation as useReactRouterLocation
} from 'react-router-dom'
import {
  SEARCHBAR_PLACEHOLDER,
  SEARCH_CTA_LABEL,
  GEO_LOCATION_LABEL
} from '../../const';
import MapIcon from '../../assets/imgs/map-marker.svg';
import './styles.css'
import { getCityName } from '../../utils/util';
import { useLocation } from '../../Providers/LocationProvider';
import { useStatus } from '../../Providers/StatusProvider';

export const Search = ({ isSticky=false }) => {
  const {
    isLoading,
    setError,
    setValidAccess
  } = useStatus()
  const {
    suggestedLocations,
    inputValue,
    setSuggestedLocations,
    setInputValue,
    onChangeInputValue,
    submitLocation,
    getCurrentLocation
  } = useLocation();

  const navigate = useNavigate();
  const { pathname } = useReactRouterLocation(); 
  useEffect(() => {
    if (pathname === '/') {
      setValidAccess(true);
    }
  },[pathname, setValidAccess])

  const selectLocation = (loc) => {
    setInputValue(getCityName(loc))
    setSuggestedLocations([])
    setError();
  }
  const submit = () => {
    setError()
    submitLocation();
    setValidAccess(true);
    navigate('/weather');
  }

  const getGeoLocation = async() => {
    setError()
    await getCurrentLocation();
    setValidAccess(true);
    navigate('/weather');
  }

  const suggestSection = suggestedLocations.map((loc, i) => { 
    return (
      <div
        className='selection'
        key={loc.id}
        onClick={() => selectLocation(loc)}>
        { getCityName(loc) }
      </div>
    );
  })

  return (
    <div className='search-wrapper'>
      <div className={`search ${isSticky ? 'search-sticky' : ''}`}>
      <div className='left'>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder={SEARCHBAR_PLACEHOLDER}
              onChange={onChangeInputValue}
              value={inputValue}
            />
            <Button
              id="button-lookup"
              onClick={submit}
              variant="dark"
              disabled={isLoading}
              size="md"
            >
              {isLoading ? SEARCH_CTA_LABEL.loading : SEARCH_CTA_LABEL.default}
              </Button>
          </InputGroup>
          {suggestedLocations.length > 0 && (
              <div className="suggestionTab">
                  {suggestSection}
              </div>)
            } 
        </div>
        <div className='right'>
          <div className="locationButton" onClick={getGeoLocation}>
            <img src={MapIcon} />
            <p>{ GEO_LOCATION_LABEL }</p>
          </div>
        </div>
        </div>
    </div>
  )
}