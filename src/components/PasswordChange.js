import React, {Component} from 'react';

import {auth} from '../firebase';

import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {passwordOne} = this.state;

        auth.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState(() => ({...INITIAL_STATE}));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <div>
                <Form onSubmit={this.onSubmit} style={{paddingTop: '5px'}}>
                    <FormGroup>
                        <Label for="New Password">New Password</Label>
                        <Input
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="New Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Confirm New Password">Confirm New Password</Label>
                        <Input
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Confirm New Password"
                        />
                    </FormGroup>
                    <Button disabled={isInvalid} type="submit" color="warning">
                        Reset My Password
                    </Button>

                    {error && <p>{error.message}</p>}
                </Form>
            </div>
        );
    }
}

export default PasswordChangeForm;