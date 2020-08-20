import {
  SAVE_USER_MESSAGE_TO_API,
  SAVE_USER_MESSAGE_TO_STORE,
  LOAD_DATA_FROM_API,
  SAVE_MESSAGES_FROM_API,
} from './types';

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

export function loadDataFromApi() {
  return {
    type: LOAD_DATA_FROM_API,
  };
}

export function saveMessagesFromAPI(data) {
  return {
    type: SAVE_MESSAGES_FROM_API,
    payload: data,
  };
}
