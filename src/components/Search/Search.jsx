import React from 'react';
import AutoComplete from 'react-google-autocomplete';
import './search.scss';

const Search = () => (
  <div className="searchContainer">
    <AutoComplete
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      onPlaceSelected={(place) => console.log(place)}
    />
  </div>
);

export default Search;
