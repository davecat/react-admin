/**
 * Created by dave on 2017/11/27.
 */
import React from 'react'
import Home from '../pages/home'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class router extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={ Home }></Route>
                    <Route></Route>
                    <Route></Route>
                </Switch>
            </Router>
        )
    }
}
export default router