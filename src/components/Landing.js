import React from 'react';
import {Component} from 'react';
import SignInPage from './SignIn';
import {
    Button, Form, FormGroup, Label, Input, Card, CardBody, Container, Row, Col, CardTitle, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap';

import * as routes from "../constants/routes";

import {Link} from 'react-router-dom';

import {SignUpForm} from "./SignUp";

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            signUp: false,
        };

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);

    }

    toggleOpen = (() => {
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: true});
        }
    });

    toggleSignUp = (() => this.setState({signUp: true}));


    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Asset Dispatch</NavbarBrand>
                    <NavbarToggler onClick={this.toggleOpen}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/vincemoe/asset-dispatch">Source</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle>{this.state.signUp ? 'Sign Up' : 'Login' }</CardTitle>
                                    {this.state.signUp ?
                                        <SignUpForm/> : <div> <SignInPage/> <div style={{paddingTop: '10px'}}><Button color="secondary" onClick={this.toggleSignUp}>Create an Account</Button>{' '}</div></div>}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default LandingPage;

