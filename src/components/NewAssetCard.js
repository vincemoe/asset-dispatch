import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Container, Row, Col} from 'reactstrap';

class NewAssetCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: null,
            type: null,
            description: null,
            lat: null,
            lng: null,
            points: {},

        }
    }

    render() {
        return (
            <Card>
                <CardTitle>{this.state.name === null ? 'New Asset' : this.state.name}</CardTitle>
            </Card>
        );
    }
};

export default NewAssetCard;