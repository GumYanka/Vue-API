import axios from "axios";
import * as _ from "lodash";
import { start, done } from "nprogress/nprogress";
import { store } from "@/store/store";
import { router } from "@/router/router";
import * as names from "@/router/names";

// let subscribers = [];
// let tokenIsRefreshing = false;

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  //baseURL: process.env.VUE_APP_HTTP_BASE_URL
});

API.interceptors.request.use(onRequestSuccess, onRequestRejected);
API.interceptors.response.use(onResponseSuccess, onResponseRejected);

function onRequestSuccess(config) {
  config.withCredentials = true;

  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
    //"AuthenticationHeader": "ADMIN",
    //"Authorization": localStorage.getItem("access-token")
  };

  // start loader during making request
  start();

  return config;
}

function onRequestRejected(error) {
  return Promise.reject(error.response.data);
}

function onResponseSuccess(response) {
  // finish loader
  done();
  return response;
}

async function onResponseRejected({ response, config }) {
  const { status } = response;

  // finish loader
  done();

  switch (status) {
    case 401:
      if (router.currentRoute.name === names.HOME) break;
      // if (response.headers.refresh) {
      //   return refreshTokenCallback(config);
      // }
      break;
    // case 500:
    //   store.dispatch("localLogout");
  }

  return Promise.reject(response.data);
}

// async function refreshTokenCallback(config) {
//   const promise = new Promise(resolve => {
//     pushSubscriber(token => {
//       config.headers.Authorization = token;
//       resolve(axios(config));
//     });
//   });
//
//   if (!tokenIsRefreshing) {
//     tokenIsRefreshing = true;
//
//     // refresh expired token
//     await store.dispatch("refreshToken");
//     const refreshedToken = localStorage.getItem("access-token");
//     tokenIsRefreshing = false;
//
//     // retry all failed requests
//     executeSubscribersRequests(refreshedToken);
//   }
//
//   return promise;
// }
//
// function executeSubscribersRequests(token) {
//   const copy = [...subscribers];
//
//   subscribers.length = 0;
//
//   _.forEach(copy, callback => callback(token));
// }
//
// function pushSubscriber(subscriber) {
//   subscribers.push(subscriber);
// }

export default API;

