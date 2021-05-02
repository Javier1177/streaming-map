import mapStyleActionTypes from './mapStyle.types';

const INITIAL_STATE = {
  isDarkMode: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mapStyleActionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default userReducer;
