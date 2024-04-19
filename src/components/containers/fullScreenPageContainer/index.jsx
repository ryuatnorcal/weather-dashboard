import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

export const FullScreenPageContainer = ({children}) => {

  return (
      <Container id='fullscreenContainer'>
        <Row className="justify-content-center align-items-center">
          <Col>
              {children}
          </Col>
        </Row>
      </Container>
  )
}