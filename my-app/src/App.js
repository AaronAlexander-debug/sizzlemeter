import './App.css';
import React from 'react';
import Weather from './components/weather/Weather';

function App() {
  // const [cityName, setCityName] = useState("")
  // const [activateText, setActivateText] = useState(false)
  return (
    <div className="App">
      <h1>🔥 SizzleMeter 🔥</h1>
      <Weather />
    </div>
  );
}

export default App;
