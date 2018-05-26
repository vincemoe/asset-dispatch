import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom';

import {auth} from '../firebase';
import * as routes from '../constants/routes';

import {
    Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import {Link} from 'react-router-dom';


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
                />
            </Link>,

        ];

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input value={email} type="email"
                               placeholder="example@website.com"
                               onChange={event => this.setState(byPropKey('email', event.target.value))}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input value={password} type="password"
                               placeholder="Password"
                               onChange={event => this.setState(byPropKey('password', event.target.value))}/>
                    </FormGroup>
                    <Button type="submit"
                            disabled={isInvalid}
                            color="primary"
                    >Submit</Button>{' '}

                    {error && <p>{error.message}</p>}
                </Form>
            </div>


        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};