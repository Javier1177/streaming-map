import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCoordinateList } from '../../redux/coordinates/coordinates.selectors';
import darkMode from '../../resources/mapDarkMode';
import Spinner from '../Spinner/Spinner';

const UnconnectedMapContainer = ({ google, coordinateList }) => (
  <div className="mapContainer">
    <Map
      google={google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
      styles={true ? darkMode : ''}
    >
      {coordinateList.map((coordinate) => (
        <Marker position={coordinate} />
      ))}
    </Map>
  </div>
);

const mapStateToProps = createStructuredSelector({
  coordinateList: selectCoordinateList,
});

const MapContainer = connect(mapStateToProps)(UnconnectedMapContainer);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  LoadingContainer: Spinner,
})(MapContainer);
