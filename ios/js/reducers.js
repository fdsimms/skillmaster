import { combineReducers } from "redux";
import {
  SHOW_PROGRESS,
  HIDE_PROGRESS,
  UPDATE_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE
} from "./actions";

function displayProgress(state = false, action) {
  switch (action.type) {
    case HIDE_PROGRESS:
      return false;
    case SHOW_PROGRESS:
      return true;
    default:
      return state;
  }
}

function errorMessage(state = "", action) {
  switch (action.type) {
    case UPDATE_ERROR_MESSAGE:
      return action.errorMessage;
    case RESET_ERROR_MESSAGE:
      return "";
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  displayProgress,
  errorMessage
});

export default rootReducer;
