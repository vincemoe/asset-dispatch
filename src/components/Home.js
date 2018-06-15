import React, {Component} from 'react';
import MapGL, {HTMLOverlay} from 'react-map-gl';
import withAuthorization from './withAuthorization';
import Sidebar from './Sidebar.js';

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
                zoom: 16.63,
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
                width: this.props.width || window.innerWidth,
                height: this.props.height || window.innerHeight - 50
            }
        });
    };

    _onClickMap(evt) {
        console.log(evt.lngLat);
    }

    render() {

        const {viewport, settings} = this.state;

        return (
            <div>
                <MapGL

                    {...viewport}
                    {...settings}
                    onViewportChange={(viewport) => this.setState({viewport})}
                    mapStyle={this.state.mapStyle}
                    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    onClick={this._onClickMap}
                />
                <Sidebar/>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);