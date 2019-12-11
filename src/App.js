import React from 'react';
import './resources/css/App.css';
import './resources/css/Main.css'
import Head from './components/Head';
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <React.Fragment>
      <header className="App-Header">
        <Head />
      </header>

      <div className="App-Body">
        <Main />
        <Footer />
      </div>

    </React.Fragment>
  );
}

export default App;
