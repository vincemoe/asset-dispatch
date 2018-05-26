import React, {Component} from 'react';
import {
    Link, withRouter,
} from 'react-router-dom';

import {
    Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import {auth} from '../firebase';
import * as routes from '../constants/routes';


const SignUpPage = (({history}) =>
    <div>
        <h1>SignUp</h1>
        <SignUpForm history={history}/>
    </div>);

const SignUpLink = (() =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>);


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = ((event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({...INITIAL_STATE}));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    });

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Username">Username</Label>
                        <Input
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Full Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password 1">Password</Label>
                        <Input
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password 2">Confirm Password</Label>
                        <Input
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </FormGroup>
                    <Button color="primary"
                            disabled={isInvalid}
                            type="submit">
                        Sign Up
                    </Button>{' '}

                    {error && <p>{error.message}</p>}
                </Form>
            </div>);
    }
}

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};