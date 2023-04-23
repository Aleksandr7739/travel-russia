import './App.css';
import ForeingCountries from './components/ForeingCountries';
import SelectZone from './components/SelectZone';

function App() {
  return (
    <div className="App">
      <SelectZone />
      <ForeingCountries />
    </div>
  );
}

export default App;
