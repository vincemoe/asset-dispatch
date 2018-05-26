import React from 'react';
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class LandingPage extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
            />
        );
    }
}

export default LandingPage;