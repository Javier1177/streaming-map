import CoordinatesActionTypes from './coordinates.types';

const INITIAL_STATE = {
  coordinateList: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoordinatesActionTypes.SET_CURRENT_COORDINATE:
      return {
        ...state,
        coordinateList: [...state.coordinateList, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
