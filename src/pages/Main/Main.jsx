import React from 'react';
import Map from '../../components/Map/Map';
import Search from '../../components/Search/Search';
import DarkModeToggle from '../../components/ChangeMapStyle/DarkModeToggle';

const MainPage = () => (
  <div className="mainPageContainer">
    <Search />
    <DarkModeToggle />
    <Map />
  </div>
);
export default MainPage;
