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

const drawControlReset = {
    point: false,
    line_string: false,
    polygon: false,
    trash: true,
    combine_features: false,
    uncombine_features: false
};

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

    enablePoint() {
        this.setState({
            drawControls: true,
            drawControlOptions: {...drawControlReset, point: true}
        });
        this.map.map.addControl(this.drawControl.draw);
        console.log("Point");
        console.log(this.state);
    }

    enablePoly() {
        this.setState({
            drawControls: true,
            drawControlOptions: {...drawControlReset, polygon: true}
        });
        console.log(this.map);
        console.log(this.drawControl);
    }

    _resetDraw() {
        this.setState({
            drawControls: false,
            drawControlOptions: {drawControlReset}
        });
        console.log("Reset");
        console.log(this.state);
    }

    render() {
        return (
            <div style={{overflow: 'hidden',}}>
                <Map
                    {...this.state.mapSettings}
                    ref={(map) => {
                        this.map = map;
                    }}
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
                <button onClick={this.enablePoly.bind(this)}>Test</button>
                <Sidebar enablePoint={this.enablePoint.bind(this)} enablePoly={this.enablePoly.bind(this)}
                         authUser={this.props.authUser} _resetDraw={this._resetDraw.bind(this)}/>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);