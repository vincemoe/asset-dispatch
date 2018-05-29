import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../firebase';

import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const PasswordForgetPage = () =>
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm/>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = ((event) => {
        const {email} = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({...INITIAL_STATE}));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    });

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <div>
                <Form onSubmit={this.onSubmit} style={{paddingTop: '5px'}}>
                    <FormGroup>
                        <Label for="Email">Email Address</Label>
                        <Input
                            value={this.state.email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </FormGroup>
                    <Button disabled={isInvalid} type="submit" color="danger">
                        Reset My Password
                    </Button>

                    {error && <p>{error.message}</p>}
                </Form>
            </div>
        );
    }
}

const PasswordForgetLink = (() =>
    <p>
        <Link to="/pw-forget">Forgot Password?</Link>
    </p>);

export default PasswordForgetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};