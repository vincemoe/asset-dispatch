import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {auth} from '../firebase';
import * as routes from '../constants/routes';

import { Link } from 'react-router-dom';


const SignInPage = (({history}) =>
    <div>
        <SignInForm history={history}/>
    </div>);

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {open: true, ...INITIAL_STATE};
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    onSubmit = ((event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        const actions = [
            <Link to={routes.LANDING}>
            <button
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            /></Link>,

        ];

        return (

                    <form onSubmit={this.onSubmit}>
                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            label="Submit"
                            primary={true}
                            type="submit"
                            disabled={isInvalid}
                        />
                        <SignUpLink/>

                        {error && <p>{error.message}</p>}
                    </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};