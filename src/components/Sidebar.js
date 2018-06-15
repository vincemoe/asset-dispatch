import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Row, Col} from 'reactstrap';

import NewAssetCard from './NewAssetCard';

class Sidebar extends Component {
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
                                    <Button color="primary" size="lg">New Asset {icons.plus}</Button>{' '}
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
                            <Row style={{paddingBottom: '10px'}}>
                                <Col>
                                    <NewAssetCard/>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
        );
    }
}


export default Sidebar;