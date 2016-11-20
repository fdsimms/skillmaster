import { AsyncStorage } from "react-native";

const setAuthHeadersFromResponse = (response) => {
  const { map } = response.headers;
  AsyncStorage.setItem("authHeaders", JSON.stringify({
    "access-token": map["access-token"][0],
    "client": map["client"][0],
    "uid": map["uid"][0],
    "expiry": map["expiry"][0],
    "token-type": map["token-type"][0]
  }))
  .catch(err => { console.log(err); throw "ERROR"; });
};

const getAuthHeaders = () => {
  return AsyncStorage.getItem("authHeaders")
    .then(authHeaders => JSON.parse(authHeaders))
    .catch(err => { console.log(err); throw "ERROR"; });
};

const getAccessToken = () => {
  return AsyncStorage.getItem("authHeaders")
    .then(authHeaders => JSON.parse(authHeaders)["access-token"])
    .catch(err => { console.log(err); throw "ERROR"; });
};

export { getAuthHeaders, setAuthHeadersFromResponse, getAccessToken };
