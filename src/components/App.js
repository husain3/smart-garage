import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';
import CameraFeedWidget from '../components/CameraFeedWidget';
import LogHistoryWidget from '../components/LogHistoryWidget';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <DoorOpenerWidget/>
      <DoorStatusWidget/>
      <CameraFeedWidget />
      <LogHistoryWidget />
    </div>
  );
}

export default App;
