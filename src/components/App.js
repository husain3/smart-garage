import DoorOpenerWidget from '../components/DoorOpenerWidget';
import DoorStatusWidget from '../components/DoorStatusWidget';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <DoorOpenerWidget/>
      <DoorStatusWidget/>
    </div>
  );
}

export default App;
