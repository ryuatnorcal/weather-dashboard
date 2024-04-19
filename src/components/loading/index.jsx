import { Spinner } from "react-bootstrap";
import { LOADING_MESSAGE } from '../../const';
import './styles.css'

export const Loading = () => {
  return (
    <div id="loadingMessage">
      <Spinner animation="border" variant="secondary" />
      <div>
        {LOADING_MESSAGE}
      </div>
    </div>
 ) 
}