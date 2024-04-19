import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Search } from "./search";
import { Loading } from "./loading";
import { Weather } from "./weatherPage";
import { FullScreenPageContainer } from './containers/fullScreenPageContainer';
import { ErrorMessage } from "./errorMessage";
import { PAGE_NOT_FOUND } from "../const";
import { useStatus } from "../Providers/StatusProvider";
export const AppRouter = () => {
  const { isLoading, error } = useStatus();
  return (
    <Router>
      <Routes>
        <Route
          path='/weather'
          element={
            <FullScreenPageContainer>
              <ErrorMessage error={error} />
              {isLoading? (<Loading />) : (<Weather />)}
              <Search isSticky={true} />    
            </FullScreenPageContainer>
          }
        />
        
        <Route
          path='/'
          element={
            <FullScreenPageContainer>
              <ErrorMessage error={error}/>
              <Search isSticky={error} />  
            </FullScreenPageContainer>
          }
        />

        <Route
          path='*'
          element={
            <FullScreenPageContainer>
              <ErrorMessage customMessage={PAGE_NOT_FOUND} />
              <Search isSticky={true} />  
            </FullScreenPageContainer>
          }
        />
      </Routes>
    </Router>
  )
}