import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ ball, setBall ] = useState(0);
  const [ strike, setStrike ] = useState(0);
  const [ out, setOut ] = useState(0);

  return (
    <div className="App">
			<Display ball={ball} strike={strike} out={out}/>
			<Dashboard ball={ball} setBall={setBall} strike={strike} setStrike={setStrike} out={out} setOut={setOut}/>
    </div>
  );
}

export default App;
