import React from 'react';
import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo}  alt="logo" style={{width: 300}}/>
        <p style={{fontWeight: 'bold'}}>
          F U D I
        </p>
      </header>
      <div style={{margin: 0}}>
        <div style={styles.box}></div>
        <div style={styles.box}></div>
      </div>
    </div>
  );
}

const styles = ({
  box : {
    display: 'inline-block',
    background: '#55f22f',
    width: 200,
    height: 200,
    borderWidth: 60,
    borderColor: '#a54633',
    borderStyle: 'solid',
    margin: 20,
    padding: 20
  },
})

export default App;
