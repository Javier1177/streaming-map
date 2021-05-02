import React from 'react';
import AutoComplete from 'react-google-autocomplete';
import './search.scss';
import { connect } from 'react-redux';
import { setCoordinates } from '../../redux/coordinates/coordinates.actions';

const Search = ({ saveCoordinates }) => (
  <div className="searchContainer">
    <AutoComplete
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      onPlaceSelected={(coordinate) => saveCoordinates(coordinate)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  saveCoordinates: (coordinate) => dispatch(setCoordinates(coordinate)),
});

export default connect(null, mapDispatchToProps)(Search);
