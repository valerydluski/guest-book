import { SAVE_USER_MESSAGE_TO_API, SAVE_USER_MESSAGE_TO_STORE } from './types';

export function saveUserMessageToAPI(data) {
  return {
    type: SAVE_USER_MESSAGE_TO_API,
    payload: data,
  };
}

export function saveUserMessageToStore(data) {
  return {
    type: SAVE_USER_MESSAGE_TO_STORE,
    payload: data,
  };
}
