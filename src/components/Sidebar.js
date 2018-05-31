import React, {Component} from 'react';
import icons from 'glyphicons'

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Container, Row, Col} from 'reactstrap';

import NewAssetCard from './NewAssetCard';

class Sidebar extends Component {
    render() {
        return (
            <div style={{position: 'absolute',
                top: '0',
                right: '0',
                maxWidth: '400px',
                background: '#fff',
                paddingLeft: '12px 24px',
                margin: '20px',
                fontSize: '13px',
                lineHeight: '2',
                color: '#6b6b76',}}>
                <Card>
                    <CardBody>
                        <Container>
                            <Row>
                                <Col style={{paddingBottom: '10px'}}>
                                    <Button color="primary" size="lg">New Asset {icons.plus}</Button>{' '}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Test 2</CardTitle>
                                            <CardSubtitle>Account Information</CardSubtitle>
                                            <CardText>Account info or something here.</CardText>
                                        </CardBody>
                                    </Card>
                                    <NewAssetCard/>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


export default Sidebar;