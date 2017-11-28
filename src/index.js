import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login'
import Home from './pages/home'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            {/*必须加上exact，严格匹配路由*/}
            <Redirect exact from='/' to='/login'/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();


