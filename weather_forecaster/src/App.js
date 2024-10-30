import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();
  
  useEffect(()=>{
    //Getting current location of user
    weather.fetchCurrentUserLocationData();
  },[])

  return (
    <div className="App">
      <h1>Weather Foreacaster APP</h1>
      <Input />
      <div>
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <Button onClick={weather.handleRefresh} value="Refresh"/>
    </div>
  );
}

export default App;
