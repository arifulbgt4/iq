// external component
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Locationmap extends Component {
  render() {
    return (
      <div
        style={{
          height: this.props.height,
          width: '100%',
          position: 'relative',
        }}
      >
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name="Current location" />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <h2>IQ</h2>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_zKt5ctyvJUOLtTlCQsboHxyjpDO6dw0',
})(Locationmap);
