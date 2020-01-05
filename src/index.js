import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/index.css';
import './resources/css/reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProvideFirebaseAuth } from './utils/useAuth';
import { ProvideFirestore } from './utils/useFirestore'
import { ProvideSelectiveContext } from './utils/useSelectiveFocus'
// Required for side-effects
require('dotenv').config();

ReactDOM.render(
    <ProvideFirebaseAuth>
        <ProvideFirestore>
            <ProvideSelectiveContext>
                <App />
            </ProvideSelectiveContext>
        </ProvideFirestore>
    </ProvideFirebaseAuth>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
