import CoordinatesActionTypes from './coordinates.types';

export const setCoordinates = (coordinate) => ({
  type: CoordinatesActionTypes.SET_CURRENT_COORDINATE,
  payload: coordinate,
});
