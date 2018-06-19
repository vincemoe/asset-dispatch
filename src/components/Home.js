import React, {Component} from 'react';
// import MapGL from 'react-map-gl';
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from 'react-mapbox-gl-draw';

// Don't forget to import the CSS
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import withAuthorization from './withAuthorization';
import Sidebar from './Sidebar.js';


const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_TOKEN
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapSettings: {
                style: 'mapbox://styles/vincemoe/cjhtcb45w1yff2so1hoihohkz',
                width: 500,
                height: 500,
                zoom: [16.63],
                center: [-70.562290, 41.656403],
            },
            drawControls: false,
            drawControlOptions: {
                point: false,
                line_string: false,
                polygon: false,
                trash: true,
                combine_features: false,
                uncombine_features: false
            }
        };
        this._onClickMap = this._onClickMap.bind(this);
        this._enablePoint = this._enablePoint.bind(this);
        this._enablePolygon = this._enablePolygon.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    };

    _resize = () => {
        this.setState({
            mapSettings: {
                ...this.state.mapSettings,
                width: window.innerWidth,
                height: window.innerHeight - 50,
            }
        });
    };

    _toggleDrawControls = () => this.setState({drawControls: !this.state.drawControls});

    _enablePoint = () => this.setState({...this.state.drawControlOptions, drawControlOptions:{point: true}});

    _enablePolygon = () => this.setState({...this.state.drawControlOptions, drawControlOptions:{polygon: true}});

    _onClickMap(evt) {
        console.log(evt.lngLat);
    }

    render() {

        return (
            <div style={{overflow: 'hidden',}}>
                <Map
                    {...this.state.mapSettings}

                    containerStyle={{
                        width: window.innerWidth,
                        height: window.innerHeight - 50
                    }}>
                    {this.state.drawControls ?
                        <DrawControl
                            ref={(drawControl) => {
                                this.drawControl = drawControl;
                            }}
                            controls={this.state.drawControlOptions}
                        /> : null}
                </Map>
                <Sidebar enablePoint={this._enablePoint} enablePolygon={this._enablePolygon} drawControlToggle={this._toggleDrawControls} authUser={this.props.authUser}/>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);