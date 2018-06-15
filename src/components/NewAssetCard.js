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
                    "id": "5b2341ab357adf4519c89375",
                    "name": "Besto",
                    "description": "Enim id eu aute proident exercitation Lorem enim sit mollit commodo ullamco. Laboris exercitation magna deserunt consectetur consequat labore labore magna amet.",
                    "lat": 70.393308,
                    "lng": -19.18927,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": -5.8987,
                            "lng": 38.844447
                        },
                        {
                            "lat": 13.468778,
                            "lng": 168.563319
                        },
                        {
                            "lat": -82.71977,
                            "lng": -6.63756
                        }
                    ]
                },
                {
                    "id": "5b2341ab7b0c858964b5d4fa",
                    "name": "Fiberox",
                    "description": "In cillum commodo ipsum nisi proident reprehenderit dolor sit non ea. Velit quis non incididunt tempor nostrud mollit cupidatat.",
                    "lat": -44.729383,
                    "lng": 140.188223,
                    "type": "Moving Asset",
                    "points": [
                        {
                            "lat": 72.134238,
                            "lng": -67.147672
                        },
                        {
                            "lat": -12.984918,
                            "lng": -72.368396
                        },
                        {
                            "lat": -46.86525,
                            "lng": -151.249559
                        }
                    ]
                },
                {
                    "id": "5b2341ab08198f876408f683",
                    "name": "Egypto",
                    "description": "Exercitation cupidatat excepteur irure proident velit deserunt pariatur. Duis velit consequat sint et elit ipsum deserunt sint commodo nulla nostrud incididunt.",
                    "lat": 37.605626,
                    "lng": 79.926034,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": -38.844511,
                            "lng": -168.920187
                        },
                        {
                            "lat": -60.994193,
                            "lng": 164.190194
                        },
                        {
                            "lat": -41.51816,
                            "lng": 36.875062
                        }
                    ]
                },
                {
                    "id": "5b2341abc14800c15aa90898",
                    "name": "Mazuda",
                    "description": "Est eiusmod minim qui duis aliquip ad nisi anim est enim eiusmod nisi incididunt. Ipsum exercitation ea ea fugiat aliqua duis eu in aliqua irure Lorem do.",
                    "lat": 77.145464,
                    "lng": -174.509334,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": 75.728018,
                            "lng": -178.98555
                        },
                        {
                            "lat": -31.611749,
                            "lng": -85.050556
                        },
                        {
                            "lat": 2.564705,
                            "lng": -103.135267
                        }
                    ]
                },
                {
                    "id": "5b2341ab108dc1401b65b50b",
                    "name": "Vetron",
                    "description": "Eu quis laborum mollit consequat proident proident deserunt commodo non enim officia laboris minim nulla. Esse enim aute cupidatat dolore nisi veniam ad reprehenderit incididunt dolor non elit.",
                    "lat": 63.456157,
                    "lng": -26.894861,
                    "type": "Moving Asset",
                    "points": [
                        {
                            "lat": -62.997509,
                            "lng": -19.185468
                        },
                        {
                            "lat": -54.062352,
                            "lng": -113.837655
                        },
                        {
                            "lat": 7.218115,
                            "lng": -176.829314
                        }
                    ]
                },
                {
                    "id": "5b2341ab9e83e2fbeca2d086",
                    "name": "Progenex",
                    "description": "Veniam enim occaecat occaecat amet labore do cupidatat aliqua eiusmod do cupidatat Lorem aliquip pariatur. Exercitation officia consectetur ad Lorem elit sunt aliquip qui mollit officia.",
                    "lat": -80.687222,
                    "lng": 114.319888,
                    "type": "Moving Asset",
                    "points": [
                        {
                            "lat": 54.091375,
                            "lng": -42.930479
                        },
                        {
                            "lat": 14.346514,
                            "lng": -174.791234
                        },
                        {
                            "lat": -84.525239,
                            "lng": 165.078038
                        }
                    ]
                },
                {
                    "id": "5b2341ab518ea0412de82d9c",
                    "name": "Tubalum",
                    "description": "Laboris dolore aliquip occaecat cillum. Proident magna deserunt in quis deserunt exercitation mollit cillum occaecat.",
                    "lat": 86.326396,
                    "lng": 55.228297,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": -19.062243,
                            "lng": -21.880712
                        },
                        {
                            "lat": 83.814053,
                            "lng": 52.126678
                        },
                        {
                            "lat": -58.851507,
                            "lng": -3.69184
                        }
                    ]
                },
                {
                    "id": "5b2341ab49cfd979375067d3",
                    "name": "Nurplex",
                    "description": "Sunt reprehenderit incididunt aliquip eu ullamco eiusmod est qui minim. Esse consequat pariatur pariatur voluptate mollit fugiat cillum adipisicing officia sunt.",
                    "lat": 23.729643,
                    "lng": 170.802858,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": -2.602708,
                            "lng": -18.132355
                        },
                        {
                            "lat": 36.669826,
                            "lng": 151.452099
                        },
                        {
                            "lat": -83.95126,
                            "lng": 61.393556
                        }
                    ]
                },
                {
                    "id": "5b2341aba3cc091b2a848265",
                    "name": "Phuel",
                    "description": "Mollit deserunt enim do eu reprehenderit tempor consequat cillum ipsum anim cillum exercitation deserunt. Id deserunt esse sint aliquip pariatur aliqua consectetur anim Lorem magna qui pariatur reprehenderit ex.",
                    "lat": -33.489993,
                    "lng": -112.214451,
                    "type": "Moving Asset",
                    "points": [
                        {
                            "lat": -60.494254,
                            "lng": -164.28588
                        },
                        {
                            "lat": -36.34386,
                            "lng": 74.095547
                        },
                        {
                            "lat": -54.014443,
                            "lng": -67.241927
                        }
                    ]
                },
                {
                    "id": "5b2341ab192736137d0cb902",
                    "name": "Frolix",
                    "description": "Duis consequat commodo consequat sit sit. Excepteur incididunt sunt deserunt qui ipsum sint reprehenderit et id magna proident ullamco incididunt.",
                    "lat": 2.845804,
                    "lng": 149.519595,
                    "type": "Stationary Geometry Asset",
                    "points": [
                        {
                            "lat": -2.103327,
                            "lng": 122.098066
                        },
                        {
                            "lat": -59.128418,
                            "lng": -85.312194
                        },
                        {
                            "lat": -13.578348,
                            "lng": 45.08366
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
                    <CardTitle>{this.state.editingAsset.name === '' ? 'New Asset' : thiSs.state.editingAsset.name}</CardTitle>
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