import React, { useEffect } from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from './actions/index';

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/hello')
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
  }, []);
  return (
    <div className="App">
      <h1>Logged in {isLogged ? 'YES' : 'NO'}</h1>
      {!isLogged ? <button onClick={() => dispatch(login())}>Login</button> : <button onClick={() => dispatch(logout())}>Logout</button>}
      {isLogged ? <h3>Info for logged in peeps</h3> : ''}
    </div>
  );
}

export default App;
