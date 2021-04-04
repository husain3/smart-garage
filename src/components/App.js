import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';
import DoorLogsWidget from '../components/DoorLogsWidget';
import GarageClimateWidget from '../components/GarageClimateWidget';
import VideoStreamWidget from './VideoStreamWidget';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <DoorOpenerWidget/>
      <DoorStatusWidget/>
      <VideoStreamWidget />
      <DoorLogsWidget/>
      <GarageClimateWidget/>
    </div>
  );
}

export default App;
