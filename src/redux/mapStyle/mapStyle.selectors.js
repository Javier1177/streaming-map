import { createSelector } from 'reselect';

const selectDarkMode = (state) => state.mapStyle;

export const isDarkMode = createSelector(
  [selectDarkMode],
  (mapStyle) => mapStyle.isDarkMode,
);
