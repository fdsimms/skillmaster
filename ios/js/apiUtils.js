import React from "react";
import {
  showSpinner,
  hideSpinner,
  updateErrorMessage,
  receiveCurrentUser,
  changeScene,
  receiveSkills
} from "./actions";
import SkillsView from "./components/SkillsView";
import AsyncStorage from "redux";

export function createSession(sessionParams, navigator) {
  return (dispatch) => {
    dispatch(showSpinner());
    fetch("http://localhost:3000/api/session", {
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
    .then(() => {
      dispatch(changeScene({
        title: "Skills", component: <SkillsView />
      }, navigator));
    })
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => { dispatch(hideSpinner()); });
  };
}

export function createUser(userParams, navigator) {
  return (dispatch) => {
    dispatch(showSpinner());
    fetch("http://localhost:3000/api/users", {
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
    .then(() => {
      dispatch(changeScene({
        title: "Skills", component: <SkillsView />
      }, navigator));
    })
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
