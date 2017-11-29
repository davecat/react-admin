/**
 * Created by dave on 2017/11/27.
 */
import React from 'react'
import Home from '../pages/home'
import Login from '../pages/login'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

class router extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/*必须加上exact，严格匹配路由*/}
                    <Redirect exact from='/' to='/login'/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                </Switch>
            </Router>
        )
    }
}
export default router