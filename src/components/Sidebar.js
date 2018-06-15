import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Row, Col} from 'reactstrap';

import NewAssetCard from './NewAssetCard';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false,
        };
    };

    toggleAdding(){
        this.setState({adding: !this.state.adding});
    };

    render() {
        return (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    maxWidth: '400px',
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
                            <Row style={{paddingBottom: '10px'}}>
                                <Col>
                                    {this.state.adding
                                        ? <div><Button color="danger" size="lg" onClick={this.toggleAdding.bind(this)}>Cancel {icons.remove}</Button>{' '}</div>
                                        : <div><Button color="primary" size="lg" onClick={this.toggleAdding.bind(this)}>New
                                            Asset {icons.plus}</Button>{' '}</div>
                                    }

                                </Col>
                            </Row>
                            <Row style={{paddingBottom: '10px'}}>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Test 2</CardTitle>
                                            <CardSubtitle>Account Information</CardSubtitle>
                                            <CardText>Account info or something here.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            {this.state.adding ?
                                <Row style={{paddingBottom: '10px'}}>
                                    <Col>
                                        <NewAssetCard/>
                                    </Col>
                                </Row>
                            : null}
                        </CardBody>
                    </Card>
                </div>
        );
    }
}


export default Sidebar;