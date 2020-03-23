import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header'
import DashboardForInstitution from './helpers/DashboardForInstitution'
import DashboardForHelpers from './helpers/DahsboardForHelpers'

import Alerts from './layout/Alerts'
import Login from './accounts/Login'
import RegisterCompany from './accounts/RegisterCompany'
import PrivateRoute from './common/PrivateRoute'

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                
                                <Route exact path="/" component={DashboardForHelpers} />        
                                <Route exact path="/fuerhelfer" component={DashboardForHelpers} />
                                <PrivateRoute exact path="/fuereinrichtungen" component={DashboardForInstitution} />
                                   
                                    
                                     
                                    <Route exact path="/register" component={RegisterCompany} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>               
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App