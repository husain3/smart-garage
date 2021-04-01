import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';
import DoorLogsWidget from '../components/DoorLogsWidget';
import CameraFeedWidget from '../components/CameraFeedWidget';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <DoorOpenerWidget/>
      <DoorStatusWidget/>
      <DoorLogsWidget/>
      {/* <CameraFeedWidget /> */}
    </div>
  );
}

export default App;
