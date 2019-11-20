import React from 'react';
import './resources/css/App.css';
import Head from './components/Head';
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <React.Fragment>
      <header className="App-Header">
        <Head />
      </header>

      <main className="App-Main">
        <Body />
        <Footer />
      </main>

    </React.Fragment>
  );
}

export default App;
