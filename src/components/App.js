import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';
import DoorLogsWidget from '../components/DoorLogsWidget';
import CameraFeedWidget from '../components/CameraFeedWidget';
import GarageClimateWidget from '../components/GarageClimateWidget';
import VideoStream from '../components/VideoStream';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <DoorOpenerWidget/>
      <DoorStatusWidget/>
      <VideoStream />
      <DoorLogsWidget/>
      <GarageClimateWidget/>
      {/* <CameraFeedWidget /> */}
    </div>
  );
}

export default App;
