import React from 'react';
import './resources/css/App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Head from './components/Head';


function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Navbar />
        <Head />
      </header>
      <main className="App-Main">
        <SignIn />

      </main>
    </div>
  );
}

export default App;
