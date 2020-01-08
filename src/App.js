import React from 'react';
import './resources/css/App.css';
import './resources/css/Main.css'
import Head from './components/Head';
import View from './utils/functionalComponent/View';

function App() {
  return (
    <React.Fragment>
      <header className="App-Header">
        <Head />
      </header>

      <div className="App-Body">
        <View />
      </div>
    </React.Fragment>
  );
}

export default App;
