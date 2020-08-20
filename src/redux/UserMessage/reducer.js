import { SAVE_USER_MESSAGE_TO_STORE, SAVE_MESSAGES_FROM_API } from './types';

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
    case SAVE_MESSAGES_FROM_API:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default userMessageReducer;
