import {
  showSpinner,
  hideSpinner,
  updateErrorMessage,
  receiveCurrentUser,
  receiveSkills
} from "./actions";
import AsyncStorage from "redux";

export function createSession(sessionParams) {
  return (dispatch) => {
    dispatch(showSpinner());
    return fetch("http://localhost:3000/api/session", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          password: sessionParams.password,
          email: sessionParams.email
        }
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(json => { dispatch(receiveCurrentUser(json)); })
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => { dispatch(hideSpinner()); });
  };
}

export function createUser(userParams) {
  return (dispatch) => {
    dispatch(showSpinner());
    return fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          nickname: userParams.nickname,
          fname: userParams.fname,
          lname: userParams.lname,
          password: userParams.password,
          email: userParams.email
        }
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(json => dispatch(receiveCurrentUser(json)))
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => dispatch(hideSpinner()));
  };
}

export function fetchSkills() {
  return (dispatch) => {
    dispatch(showSpinner());
    fetch("http://localhost:3000/api/skills", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(json => {
      dispatch(receiveSkills(json));
      AsyncStorage.setItem("skills", json);
    })
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => { dispatch(hideSpinner()); });
  };
}

export function fetchSkill(skillId) {
  return (dispatch) => {
    dispatch(showSpinner());
    fetch(`http://localhost:3000/api/skills/${skillId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(json => {
      dispatch(receiveSkills(json));
      AsyncStorage.setItem(`skills/${skillId}`, json);
    })
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => { dispatch(hideSpinner()); });
  };
}
