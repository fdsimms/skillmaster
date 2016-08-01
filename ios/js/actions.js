export const HIDE_SPINNER = "HIDE_SPINNER";
export const SHOW_SPINNER = "SHOW_SPINNER";
export const UPDATE_ERROR_MESSAGE = "UPDATE_ERROR_MESSAGE";
export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CHANGE_SCENE = "CHANGE_SCENE";

export function showSpinner() {
  return {
    type: SHOW_SPINNER
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER
  };
}

export function updateErrorMessage(errorMessage) {
  return {
    type: UPDATE_ERROR_MESSAGE,
    errorMessage
  };
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
}

export function changeScene(newScene, navigator) {
  return {
    type: CHANGE_SCENE,
    currentScene: newScene,
    navigator
  };
}
