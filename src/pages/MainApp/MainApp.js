import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../Home/Home';
import AddUser from '../AddUser/AddUser';
import EditUser from '../EditUser/EditUser';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import Gap from '../../components/atoms/Gap/Gap';

const MainApp = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/add-user">
                        <Header />
                        <Gap height={25} />
                        <AddUser />
                        <Gap height={25} />
                        <Footer />
                    </Route>
                    <Route path="/edit-user">
                        <Header />
                        <EditUser />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Gap height={25} />
                        <Home />
                        <Gap height={25} />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainApp;
