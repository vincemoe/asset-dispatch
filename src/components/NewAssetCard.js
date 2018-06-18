import React, {Component} from 'react';

import {db, firebase} from '../firebase/';

import {Card, CardBody, Form, FormGroup, CardTitle, Label, Input, Button, Col} from 'reactstrap';

import AuthUserContext from './AuthUserContext';

class NewAssetCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
            editingAsset: {
                name: null,
                type: null,
                description: '',
                lat: null,
                lng: null,
                points: {},
            },
            assets: null,
            grouping: 'none',
        };
    };

    componentWillMount() {
        db.getAssets().then(snapshot =>
            this.setState(() => ({assets: snapshot.val()}))
        );
    };


    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{!this.state.editingAsset.name ? 'New Asset' : this.state.editingAsset.name}</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="assetName">Name</Label>
                            <Input onChange={(e) => this.setState({
                                editingAsset: {
                                    ...this.state.editingAsset,
                                    name: e.target.value
                                }
                            })} type="text" name="name" id="assetName" placeholder="ex. Staff Barracks"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="assetDesc">Description</Label>
                            <Input onChange={(e) => this.setState({
                                editingAsset: {
                                    ...this.state.editingAsset,
                                    description: e.target.value
                                }
                            })} type="textarea" name="text" id="assetDesc"
                                   placeholder="ex. Location of cadet staff housing." bsSize="sm"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Select Type</Label>
                            <Input onChange={(e) => this.setState({
                                editingAsset: {
                                    ...this.state.editingAsset,
                                    type: e.target.value
                                }
                            })} type="select" name="type" id="typeSelect">
                                <option></option>
                                <option>Stationary Point Asset</option>
                                <option>Stationary Geometry Asset</option>
                                <option>Moving Asset</option>
                                <option>Group</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"group"}>Select Assets to Group</Label>
                            <Input type="select" name="group" id="selectGroup" multiple>
                                {Object.keys(this.props.assets).map(p => <option
                                    key={this.props.assets[p].id}>{this.props.assets[p].name}</option>)}
                            </Input>
                        </FormGroup>
                        <AuthUserContext.Consumer>
                            {authUser =>
                                <Button color="success"
                                        disabled={!this.state.editingAsset.type || !this.state.editingAsset.name}
                                        onClick={() => db.addAsset(this.state.editingAsset.description, '0', '0', this.state.editingAsset.name, this.state.editingAsset.type, 'test', Math.floor(new Date('2012-06-08').getTime() / 1000), authUser.uid).then(this.props.handleSuccess)}>Submit</Button>}
                        </AuthUserContext.Consumer>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default NewAssetCard;
