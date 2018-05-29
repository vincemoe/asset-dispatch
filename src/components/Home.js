import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import withAuthorization from './withAuthorization';
import Sidebar from './Sidebar.js';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            },
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    };

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.props.width || window.innerWidth,
                height: this.props.height || window.innerHeight
            }
        });
    };

    render() {
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                >
                    <Sidebar/>
                </ReactMapGL>

            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);