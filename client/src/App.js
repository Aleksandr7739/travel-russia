import './App.css';
import ForeingCountries from './components/ForeingCountries';
import RussianCities from './components/RussianCities';
import SelectZone from './components/SelectZone';

function App() {
  return (
    <div className="App">
      <SelectZone />
      {/* <ForeingCountries />
      <RussianCities /> */}
    </div>
  );
}

export default App;
