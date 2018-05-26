import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
