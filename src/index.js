import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
