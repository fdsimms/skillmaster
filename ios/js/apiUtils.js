import {
  receiveCurrentUser,
  receiveSkills
} from "./actions";
import { setAuthHeadersFromResponse } from "./storageUtils";

export function createSession(sessionParams) {
  return (dispatch) => {
    fetch("http://localhost:3000/api/auth/sign_in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: sessionParams.password,
        email: sessionParams.email
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      setAuthHeadersFromResponse(response);
      return response.json();
    })
    .then(json => { dispatch(receiveCurrentUser(json)); })
    .catch(err => { console.log(err); throw "ERROR"; });
  };
}

export function createUser(userParams) {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: userParams.password,
        email: userParams.email,
        password_confirmation: userParams.password,
        confirm_success_url: "localhost:3000"
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(createSession({ email: userParams.email, password: userParams.password }));
  };
}

export function fetchSkills() {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/skills", {
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
    });
  };
}

export function fetchSkill(skillId) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/skills/${skillId}`, {
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
    });
  };
}

export function validateToken({ token, uid, client }) {
  return fetch("http://localhost:3000/api/auth/validate_token", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-token": token,
      uid,
      client
    }
  })
  .then(response => {
    return response.json();
  });
}
