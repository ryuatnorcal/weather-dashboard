import { WEATHER_API_MESSAGE_MAP } from "../../const"
import { FullScreenPageContainer } from "../containers/fullScreenPageContainer";
import './styles.css'


export const ErrorMessage = ({ error, customMessage }) => {
  if (!error && !customMessage) return;
  return(
    <FullScreenPageContainer>
      <div id="error">
        <div className="title">Sorry... </div>
        {customMessage && (<p>{customMessage}</p>)}
        {error?.message && (<p>{error.message}</p>)}
        {error?.code && (<p>{WEATHER_API_MESSAGE_MAP[error.code]}</p>)}
      </div>
    </FullScreenPageContainer>
  )
}