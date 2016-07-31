import {
  showSpinner,
  hideSpinner,
  updateErrorMessage,
  receiveCurrentUser
} from "./actions";

export function createSession(email, password) {
  return dispatch => {
    dispatch(showSpinner());
    fetch("http://localhost:3000/api/session", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: { password, email }
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
    .then(json => { dispatch(receiveCurrentUser(json)); })
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => {
      dispatch(hideSpinner());
    });
  };
}

export function createUser(userParams) {
  return dispatch => {
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
    .catch(() => dispatch(updateErrorMessage("Error")))
    .finally(() => dispatch(hideSpinner()));
  };
}
