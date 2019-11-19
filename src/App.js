import React from 'react';
import './resources/css/App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Head from './components/Head';


function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Head />

      </header>
      <main className="App-Main">
        <Navbar />
      </main>
    </div>
  );
}

export default App;
