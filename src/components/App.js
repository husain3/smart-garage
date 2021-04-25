import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';
import DoorLogsWidget from '../components/DoorLogsWidget';
import GarageClimateWidget from '../components/GarageClimateWidget';
import VideoStreamWidget from './VideoStreamWidget';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row xs={1} md={2} lg={2} xl={3}>
          <Col>
            <DoorOpenerWidget />
          </Col>
          <Col>
            <DoorStatusWidget />
          </Col>
          <Col>
            <VideoStreamWidget />
          </Col>
          <Col>
            <DoorLogsWidget />
          </Col>
          <Col>
            <GarageClimateWidget />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
