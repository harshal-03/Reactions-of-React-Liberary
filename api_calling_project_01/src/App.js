import React, {useEffect, useState} from 'react';
import './App.css';
import { getRandomUser } from './api';
import UserCard from './components/UserCard';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect ( ()=>{
    getRandomUser().then((user) => setUserData(user.results[0]))
  },[]);
  
  const refresh = ()=>{
    getRandomUser().then((user)=> setUserData(user.results[0]))
  }
  return (
    <div className="App">
      {userData && <UserCard data={userData}/>}
      <button onClick={refresh}>Refresh User</button>
    </div>
  );
}

export default App;
