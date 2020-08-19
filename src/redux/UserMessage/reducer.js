import { SAVE_USER_MESSAGE_TO_STORE } from './types';

const initialState = {
  data: [],
};

function userMessageReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_MESSAGE_TO_STORE:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
}

export default userMessageReducer;
