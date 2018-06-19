import React from 'react';

import AuthUserContext from './AuthUserContext';
import {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Container, Row, Col} from 'reactstrap';

const AccountPage = (() =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <Container>
                    <Row>
                        <Col style={{paddingTop: '10px'}}>
                            <Card body outline color="primary">
                                <CardBody>
                                    <CardTitle>{authUser.email}</CardTitle>
                                    <CardSubtitle>Account Information</CardSubtitle>
                                    <CardText>Account info or something here.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col style={{paddingTop: '10px'}}>
                            <Card  body outline color="info">
                                <CardBody>
                                    <CardTitle>Password Forgot</CardTitle>
                                    <CardSubtitle>Use this to reset your account password</CardSubtitle>
                                    <PasswordForgetForm/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col style={{paddingTop: '10px'}}>
                            <Card body outline color="success">
                                <CardBody>
                                    <CardTitle>Password Change</CardTitle>
                                    <CardSubtitle>Use this to change your password if you know your current password.</CardSubtitle>
                                    <PasswordChangeForm/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        }
    </AuthUserContext.Consumer>);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);