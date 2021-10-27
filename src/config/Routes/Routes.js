import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from '../../pages/MainApp/MainApp';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
