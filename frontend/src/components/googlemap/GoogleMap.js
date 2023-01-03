import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: -6.2841286,
                lng: 106.9102113,
            }
        }
    };

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                this.setState({ address })
                this.setState({ mapCenter: latLng })
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: "500px",
            margin: '0 auto',
        }
        return (
            <div id="googleMap">
                <Map google={this.props.google}
                    containerStyle={containerStyle}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC5ifOblrDgWtZLbCH8BOLDegavUbd9Te8')
})(MapContainer)