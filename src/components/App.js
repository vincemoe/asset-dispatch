import React, {Component} from 'react';
import {
    BrowserRouter as Router, Route,
} from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import {auth, firebase} from '../firebase';


import SignOutButton from './SignOut';

class Login extends Component {

    render() {
        return (
            <button {...this.props} containerElement={<Link to={routes.SIGN_IN}/>} label="Login"/>
        );
    }
}

const Logged = (props) => (
    <menu
        {...props}

        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <Link to={routes.ACCOUNT}><menuitem primaryText="Account"/></Link>
        <menuitem primaryText="Help"/>
        <SignOutButton/>
    </menu>
);

Logged.muiName = 'IconMenu';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            open: false
        };
    };

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({authUser}))
                : this.setState(() => ({authUser: null}));
        });
    };

    render() {
        return (
            <Router>
                <div>

                   <div>
                        <Route
                            exact path={routes.LANDING}
                            component={() => <div style={{position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', marginTop: '-25p', height: '100vh'}}>
                                <LandingPage/></div>}
                        />
                        <Route
                            exact path={routes.SIGN_UP}
                            component={() => <SignUpPage/>}
                        />
                        <Route
                            exact path={routes.SIGN_IN}
                            component={() =>
                                <SignInPage/>}
                        />
                        <Route
                            exact path={routes.PASSWORD_FORGET}
                            component={() => <PasswordForgetPage/>}
                        />
                        <Route
                            exact path={routes.HOME}
                            component={() => <HomePage/>}
                        />
                        <Route
                            exact path={routes.ACCOUNT}
                            component={() => <AccountPage/>}
                        />
                    </div>

                </div>
                </Router>
        );
    }
}

export default App;
