import { combineReducers } from "redux";
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  UPDATE_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  RECEIVE_CURRENT_USER,
  CHANGE_SCENE,
  RECEIVE_SKILLS
} from "./actions";
import SplashPage from "./components/SplashPage";

function showSpinner(state = false, action) {
  switch (action.type) {
  case HIDE_SPINNER:
    return false;
  case SHOW_SPINNER:
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

function currentUser(state = "", action) {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return action.currentUser;
  default:
    return state;
  }
}

function currentScene(state = { title: "Skillmaster", component: SplashPage }, action) {
  switch (action.type) {
  case CHANGE_SCENE:
    return action.currentScene;
  default:
    return state;
  }
}

function skills(state = {}, action) {
  switch (action.type) {
  case RECEIVE_SKILLS:
    const newSkills = Object.assign({}, state);
    action.skills.forEach(skill => {
      newSkills[skill.id] = skill;
    });
    return newSkills;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  showSpinner,
  errorMessage,
  currentUser,
  currentScene,
  skills
});

export default rootReducer;
