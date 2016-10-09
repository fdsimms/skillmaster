import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { CHANGE_SCENE } from "./actions";

function navigatorIOSMiddleware() {
  return (next) => (action) => {
    if (action.type === CHANGE_SCENE) {
      const { title, component, passProps } = action.currentScene;

      action.navigator.push({ title, component: component.type, passProps });
    }
    return next(action);
  };
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      navigatorIOSMiddleware
    )
  );
}
