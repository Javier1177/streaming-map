import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

const MapContainer = ({ google }) => (
  <div className="mapContainer">
    <Map
      google={google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  </div>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);
