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

/*UI Components*/

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import SignOutButton from './SignOut';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} containerElement={<Link to={routes.SIGN_IN}/>} label="Login"/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <Link to={routes.ACCOUNT}><MenuItem primaryText="Account"/></Link>
        <MenuItem primaryText="Help"/>
        <SignOutButton/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class App extends Component {

    static muiName = 'FlatButton';

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
                <MuiThemeProvider>
                    <AppBar
                        title="Asset Dispatch"
                        iconElementLeft={<span/>}
                        iconElementRight={this.state.authUser ? <Logged/> : <Login/>}
                    /></MuiThemeProvider>

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
