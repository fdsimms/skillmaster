import {
  receiveCurrentUser,
  receiveSkills
} from "./actions";

export function createSession(sessionParams) {
  return (dispatch) => {
    return fetch("https://skillmaster-api.herokuapp.com/api/session", {
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
    .then(json => { dispatch(receiveCurrentUser(json)); });
  };
}

export function createUser(userParams) {
  return (dispatch) => {
    return fetch("https://skillmaster-api.herokuapp.com/api/users", {
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
    .then(json => dispatch(receiveCurrentUser(json)));
  };
}

export function fetchSkills() {
  return (dispatch) => {
    return fetch("https://skillmaster-api.herokuapp.com/api/skills", {
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
    return fetch(`https://skillmaster-api.herokuapp.com/api/skills/${skillId}`, {
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
