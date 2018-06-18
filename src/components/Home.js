import React, {Component} from 'react';
// import MapGL from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
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
            mapStyle: 'mapbox://styles/vincemoe/cjhtcb45w1yff2so1hoihohkz',
            viewport: {
                width: 500,
                height: 500,
                latitude: 41.656403,
                longitude: -70.562290,
                zoom: [16.63],
                center: [-70.562290, 41.656403],
            },
        };
        this._onClickMap = this._onClickMap.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    };

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth,
                height: window.innerHeight - 50,
            }
        });
    };

    _onClickMap(evt) {
        console.log(evt.lngLat);
    }

    render() {

        const {viewport, settings} = this.state;

        return (
            <div style={{overflow: 'hidden',}}>
                {/*<MapGL*/}
                    {/*{...viewport}*/}
                    {/*{...settings}*/}
                    {/*onViewportChange={(viewport) => this.setState({viewport})}*/}
                    {/*mapStyle={this.state.mapStyle}*/}
                    {/*mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}*/}
                    {/*onClick={this._onClickMap}*/}
                {/*><DrawControl*/}
                    {/*ref={(drawControl) => {*/}
                        {/*this.drawControl = drawControl;*/}
                    {/*}}*/}
                {/*/></MapGL>*/}
                <Map
                    style={this.state.mapStyle}
                    center={this.state.viewport.center}
                    zoom={this.state.viewport.zoom}
                    containerStyle={{
                        width: window.innerWidth,
                        height: window.innerHeight - 50
                    }}>
                    <DrawControl
                        ref={(drawControl) => {
                            this.drawControl = drawControl;
                        }}/>
                </Map>
                <Sidebar authUser={this.props.authUser}/>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);