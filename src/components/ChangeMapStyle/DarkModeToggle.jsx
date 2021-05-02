import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleDarkMode } from '../../redux/mapStyle/mapStyle.actions';
import { isDarkMode } from '../../redux/mapStyle/mapStyle.selectors';
import './darkModeToggle.scss';

const DarkModeToggleContainer = ({ toggleDarkMode, isDarkMode }) => (
  <div className="darkModeToggleContainer">
    <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode} size={80} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  isDarkMode: isDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DarkModeToggleContainer);
