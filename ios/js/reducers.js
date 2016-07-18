import { combineReducers } from "redux";
import {
  SHOW_PROGRESS,
  HIDE_PROGRESS
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

const rootReducer = combineReducers({
  displayProgress
});

export default rootReducer;
