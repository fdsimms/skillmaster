export const HIDE_PROGRESS = "HIDE_PROGRESS";
export const SHOW_PROGRESS = "SHOW_PROGRESS";
export const UPDATE_ERROR_MESSAGE = "UPDATE_ERROR_MESSAGE";
export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

export function showProgress() {
  return {
    type: SHOW_PROGRESS
  };
}

export function hideProgress() {
  return {
    type: HIDE_PROGRESS
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
