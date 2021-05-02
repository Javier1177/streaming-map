import { createSelector } from 'reselect';

const selectCoordinates = (state) => state.coordinates;

export const selectCoordinateList = createSelector(
  [selectCoordinates],
  (coordinates) => coordinates.coordinateList,
);
