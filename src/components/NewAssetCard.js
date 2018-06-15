import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, Form, FormGroup, CardTitle, Label, Input, Row, Col} from 'reactstrap';

class NewAssetCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingAsset: {
                name: null,
                type: null,
                description: null,
                lat: null,
                lng: null,
                points: {},
            },
            assets: [{
                    'id': '0000',
                    'name': 'Test Asset 1',
                    'type': 'Moving Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
                {
                    'id': '0001',
                    'name': 'Test Asset 2',
                    'type': 'Stationary Point Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
                {
                    'id': '0002',
                    'name': 'Test Asset 3',
                    'type': 'Stationary Geometry Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
                {
                    'id': '0003',
                    'name': 'Test Asset 4',
                    'type': 'Stationary Geometry Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
                {
                    'id': '0004',
                    'name': 'Test Asset 5',
                    'type': 'Stationary Geometry Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
                {
                    'id': '0005',
                    'name': 'Test Asset 6',
                    'type': 'Stationary Geometry Asset',
                    'description': 'A Test Asset',
                    'lat': '0',
                    'lng': '0',
                    'points': [
                        ['0', '0'],
                        ['0', '0'],
                    ]
                    ,
                },
            ],
            grouping: 'none',
        };
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.state.name === null ? 'New Asset' : this.state.name}</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="assetName">Name</Label>
                            <Input type="text" name="name" id="assetName" placeholder="Staff Barracks"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Select Type</Label>
                            <Input type="select" name="type" id="typeSelect">
                                <option>Stationary Point Asset</option>
                                <option>Stationary Geometry Asset</option>
                                <option>Moving Asset</option>
                                <option>Group</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"group"}>Select Assets to Group</Label>
                            <Input type="select" name="group" id="selectGroup" multiple>
                                {this.state.assets.map(p => <option key={p.id}>{p.name}</option>)}
                            </Input>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
};

export default NewAssetCard;