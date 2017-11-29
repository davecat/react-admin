import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入router
import Router from './router/router'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router/>
    , document.getElementById('root'));
registerServiceWorker();


