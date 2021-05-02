import CoordinatesActionTypes from './coordinates.types';

export const setCoordinates = (coordinate) => ({
  type: CoordinatesActionTypes.SET_CURRENT_COORDINATE,
  payload: coordinate,
});

export const retriveCoordinates = () => ({
  type: CoordinatesActionTypes.RETRIVE_COORDINATE_LIST,
});
