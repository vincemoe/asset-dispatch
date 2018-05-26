import React, {Component} from 'react';
import {
    BrowserRouter as Router, Route,
} from 'react-router-dom';
import './App.css';
import {Link} from 'react-router-dom';
import withAuthentication from './withAuthentication';
import AuthUserContext from './AuthUserContext';

import {
    Button, Form, FormGroup, Label, Input, Card, CardBody, Container, Row, Col, CardTitle, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

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
        <Link to={routes.ACCOUNT}>
            <menuitem primaryText="Account"/>
        </Link>
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
            open: false,
            isOpen: false,

        };
        this.toggleOpen = this.toggleOpen.bind(this);

    };

    toggleOpen = (() => {
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: true});
        }
    });

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
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="#">Asset Dispatch</NavbarBrand>
                        <NavbarToggler onClick={this.toggleOpen}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {this.state.authUser ?
                                    <NavItem>
                                        <Link style={{textDecoration: 'none',}} to={routes.HOME}><NavLink>Home</NavLink></Link>
                                    </NavItem> : null}
                                <NavItem>
                                    <NavLink href="#">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/vincemoe/asset-dispatch">Source</NavLink>
                                </NavItem>
                                <NavItem>
                                    {this.state.authUser ?
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                {this.state.authUser.email}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <Link style={{textDecoration: 'none',}} to={routes.ACCOUNT}>Account</Link>
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    <SignOutButton/>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown> : null}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div>
                        <Route
                            exact path={routes.LANDING}
                            component={() => <LandingPage/>}
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

export default withAuthentication(App);
