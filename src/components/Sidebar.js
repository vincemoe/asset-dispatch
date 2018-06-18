import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Row, Col, CardFooter, Alert} from 'reactstrap';

import {db_ref} from '../firebase/firebase';

import {db} from '../firebase';

import NewAssetCard from './NewAssetCard';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            assets: [],
            visible: false,
            addedSuccess: false,
        };
        this.handleSuccess = this.handleSuccess.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

        let ref = db_ref.ref("assets/");

        ref.on("value", ((snapshot) =>
                this.setState(() => ({assets: snapshot.val()}))
        ), ((errorObject) =>
                console.log("The read failed: " + errorObject.code)
        ));

    };


    toggleAdding() {
        this.setState({adding: !this.state.adding});
    };

    componentDidMount() {
        db.getAssets().then(snapshot =>
            this.setState(() => ({assets: snapshot.val()}))
        );
    };

    onDismiss() {
        this.setState({ visible: false });
    }

    handleSuccess() {
        this.setState({visible: true, addedSuccess: true, adding: false});
    }

    // // Retrieve new posts as they are added to our database
    // ref.on("child_added", function(snapshot, prevChildKey) {
    //     var newPost = snapshot.val();
    //     console.log("Author: " + newPost.author);
    //     console.log("Title: " + newPost.title);
    //     console.log("Previous Post ID: " + prevChildKey);
    // });

    render() {
        return (
            <div style={{
                position: 'absolute',
                overflow: 'scroll',
                overflowX: 'hidden',
                top: '0',
                right: '0',
                maxWidth: '350px',
                maxHeight: '750px',
                background: '#fff',
                paddingLeft: '12px 24px',
                marginRight: '20px',
                marginTop: '80px',
                fontSize: '13px',
                lineHeight: '2',
                color: '#6b6b76',
            }}>
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    Asset successfully added!
                                </Alert>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: '10px'}}>
                            <Col>
                                {this.state.adding
                                    ? <div><Button color="danger" size="lg"
                                                   onClick={this.toggleAdding.bind(this)}>Cancel {icons.remove}</Button>{' '}
                                    </div>
                                    : <div><Button color="primary" size="lg" onClick={this.toggleAdding.bind(this)}>New
                                        Asset {icons.plus}</Button>{' '}</div>
                                }

                            </Col>
                        </Row>
                        {this.state.adding ?
                            <Row style={{paddingBottom: '10px'}}>
                                <Col>
                                    <NewAssetCard handleSuccess={this.handleSuccess} assets={this.state.assets} authUser={this.props.authUser}/>
                                </Col>
                            </Row>
                            : null}

                        {Object.keys(this.state.assets).map((asset) =>
                            <Row key={this.state.assets[asset].id} style={{paddingBottom: '10px'}}>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{this.state.assets[asset].name}</CardTitle>
                                            <CardSubtitle>{this.state.assets[asset].type}</CardSubtitle>
                                            <CardText>{this.state.assets[asset].description}</CardText>
                                        </CardBody>
                                        <CardFooter>ID: {asset}<br/>{this.state.assets[asset].lat}, {this.state.assets[asset].lng}</CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        )
                        }
                    </CardBody>
                </Card>
            </div>
        );
    }
}


export default Sidebar;