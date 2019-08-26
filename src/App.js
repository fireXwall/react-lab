import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')


  return (
    <div className="App" style={{display:'flex', justifyContent: 'center'}}>
      <div style={{display: "flex", flexDirection: 'column',width: '10vw', marginTop: '15vh'}}>
        <h4>username</h4>
        <input type='text' style={{marginBottom:'10px'}} value={username} onChange={e=>setUsername(e.target.value)} />
        <h4>password</h4>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />

        <button>Log in</button>
      </div>
    </div>
  );
}

export default App;
