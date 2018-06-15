import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, Form, FormGroup, CardTitle, Label, Input, Button, Col} from 'reactstrap';

class NewAssetCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingAsset: {
                name: '',
                type: null,
                description: null,
                lat: null,
                lng: null,
                points: {},
            },
            assets: [
                {
                    "id": "5b233e9aa2692099040a8003",
                    "name": "Austex",
                    "type": "Mollit sit irure ad nulla est exercitation occaecat dolore ad. Quis exercitation consectetur consequat enim ea fugiat eiusmod in esse.",
                    "description": true,
                    "lat": -4.327889,
                    "lng": 27.679983,
                    "points": [
                        {
                            "lat": 46.936044,
                            "lng": -137.023157
                        },
                        {
                            "lat": 18.019943,
                            "lng": 55.362225
                        },
                        {
                            "lat": 60.221553,
                            "lng": -113.346502
                        }
                    ]
                },
                {
                    "id": "5b233e9a4f462419ed1abba3",
                    "name": "Synkgen",
                    "type": "Tempor consectetur enim proident sunt ex incididunt sit ipsum. Veniam ipsum eiusmod fugiat do ullamco irure ipsum aliquip aliquip proident et deserunt fugiat reprehenderit.",
                    "description": false,
                    "lat": 85.499248,
                    "lng": -9.831205,
                    "points": [
                        {
                            "lat": -56.290595,
                            "lng": 157.526615
                        },
                        {
                            "lat": 73.838315,
                            "lng": -92.848854
                        },
                        {
                            "lat": 23.670306,
                            "lng": -143.05212
                        }
                    ]
                },
                {
                    "id": "5b233e9ae272a2dd005104a6",
                    "name": "Talae",
                    "type": "Est dolor amet enim proident minim sunt ullamco. Laborum enim ea sint quis.",
                    "description": true,
                    "lat": 16.973429,
                    "lng": -19.524696,
                    "points": [
                        {
                            "lat": -2.13113,
                            "lng": -165.567313
                        },
                        {
                            "lat": -72.43283,
                            "lng": 80.721023
                        },
                        {
                            "lat": 35.92486,
                            "lng": -127.00346
                        }
                    ]
                },
                {
                    "id": "5b233e9afa589d1792e69684",
                    "name": "Prismatic",
                    "type": "Id mollit ea nulla incididunt exercitation et in commodo exercitation quis ullamco. Nostrud et ipsum deserunt do irure esse dolore laboris minim.",
                    "description": true,
                    "lat": -1.30401,
                    "lng": 29.234794,
                    "points": [
                        {
                            "lat": -34.156865,
                            "lng": -177.218557
                        },
                        {
                            "lat": -17.633691,
                            "lng": 3.296116
                        },
                        {
                            "lat": -51.083157,
                            "lng": 59.945191
                        }
                    ]
                },
                {
                    "id": "5b233e9a94025895e759f339",
                    "name": "Kegular",
                    "type": "Ipsum laborum velit eiusmod culpa est aliquip elit id id qui ut eiusmod. Culpa minim laboris enim minim nostrud incididunt non nisi.",
                    "description": false,
                    "lat": -32.912403,
                    "lng": 174.454897,
                    "points": [
                        {
                            "lat": 50.150638,
                            "lng": -130.253769
                        },
                        {
                            "lat": -60.054473,
                            "lng": 142.223163
                        },
                        {
                            "lat": -28.311358,
                            "lng": 153.262565
                        }
                    ]
                },
                {
                    "id": "5b233e9a8baa23fbb0c4477d",
                    "name": "Ginkle",
                    "type": "Aute magna nulla laboris dolor sit quis voluptate ad pariatur Lorem excepteur laborum. Lorem proident in sint et ea mollit reprehenderit nisi et pariatur cillum eu.",
                    "description": false,
                    "lat": -85.321118,
                    "lng": -102.687295,
                    "points": [
                        {
                            "lat": 47.408764,
                            "lng": 66.522488
                        },
                        {
                            "lat": -34.803951,
                            "lng": 4.481139
                        },
                        {
                            "lat": -28.863126,
                            "lng": -156.413096
                        }
                    ]
                },
                {
                    "id": "5b233e9a069053049c7cf8c8",
                    "name": "Viagreat",
                    "type": "In velit aliqua ea enim. Duis irure enim Lorem occaecat cupidatat qui magna.",
                    "description": true,
                    "lat": 67.716456,
                    "lng": 121.889881,
                    "points": [
                        {
                            "lat": -58.339091,
                            "lng": -18.02286
                        },
                        {
                            "lat": -36.553256,
                            "lng": 95.25455
                        },
                        {
                            "lat": -72.773002,
                            "lng": -96.208568
                        }
                    ]
                },
                {
                    "id": "5b233e9aa890626f9981486b",
                    "name": "Freakin",
                    "type": "Deserunt deserunt excepteur incididunt mollit irure nisi id deserunt deserunt irure est minim tempor. Occaecat qui culpa deserunt minim.",
                    "description": true,
                    "lat": -24.675076,
                    "lng": 146.48717,
                    "points": [
                        {
                            "lat": 31.262709,
                            "lng": 30.405384
                        },
                        {
                            "lat": 64.667073,
                            "lng": -9.707656
                        },
                        {
                            "lat": 16.821763,
                            "lng": 94.477256
                        }
                    ]
                },
                {
                    "id": "5b233e9a361a4ad33b1fb1e1",
                    "name": "Retrotex",
                    "type": "Veniam veniam Lorem officia proident laborum ipsum duis tempor duis consequat aute duis. Reprehenderit officia officia anim pariatur exercitation irure occaecat veniam.",
                    "description": false,
                    "lat": 89.369032,
                    "lng": 100.296893,
                    "points": [
                        {
                            "lat": 60.358371,
                            "lng": 155.502844
                        },
                        {
                            "lat": -71.369785,
                            "lng": 127.903898
                        },
                        {
                            "lat": -2.620792,
                            "lng": 131.679888
                        }
                    ]
                },
                {
                    "id": "5b233e9aff5e9e9b1baaa074",
                    "name": "Delphide",
                    "type": "Cupidatat aute occaecat id dolore. Tempor incididunt Lorem enim irure tempor ipsum dolor adipisicing labore ad culpa qui.",
                    "description": true,
                    "lat": 34.417014,
                    "lng": -170.093756,
                    "points": [
                        {
                            "lat": 34.815966,
                            "lng": 119.015036
                        },
                        {
                            "lat": 38.568031,
                            "lng": 135.018453
                        },
                        {
                            "lat": -13.050895,
                            "lng": 137.073556
                        }
                    ]
                }
            ],
            grouping: 'none',
        };
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.state.editingAsset.name === '' ? 'New Asset' : this.state.editingAsset.name}</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="assetName">Name</Label>
                            <Input onChange={(e) => this.setState({editingAsset:{name: e.target.value}})} type="text" name="name" id="assetName" placeholder="Staff Barracks"/>
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
                        <Button color="success">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
};

export default NewAssetCard;