import { useState, useEffect } from "react";
import axios from "axios";

// So cookies can be sent automatically with requests
axios.defaults.withCredentials = true;

/**
 * a function which resolves a response promise from axios and returns an object with the data and error properties. If the response is successful, the data property will be set to the response data. If the response is an error, the error property will be set to the error and error.message property will be set to the error message if it exists.
 * @param promise - the promise to resolve
 * @returns an object with data property set to the response data if the response is successful and is unassigned otherwise, an error property set to the error if the response is an error or is unassigned otherwise, and an error.message property set to the error message if it exists on the error object.
 */
async function resolve(promise) {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    const res = await promise;
    resolved.data = res.data;
  } catch (e) {
    // Attaches error so description is accessed at resolved.error.message
    const err = e;
    if (err.response) {
      // Handles populating error with data from an error thrown by the server
      resolved.error = err.response;
      resolved.error.message = err.response.data.message;
    } else {
      // Handles case for axios errors
      resolved.error = err;
    }
  }
  return resolved;
}

/**
 * To UPDATE DURING DEPLOYMENT USING ENVIRONMENT VARIABLES
 */
const BACKENDURL = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "http://127.0.0.1:5000";

const URLPREFIX = `${BACKENDURL}`;

/**
 * A function which makes a GET request to the server when given a url and returns the response data after it is resolved by the {@link resolve} function.
 * @param url - a string representing the url to make the request to. The format should be 'router/endpoint'
 * @returns the response data from the server
 */
async function getData(url) {
  const response = await resolve(axios.get(`${URLPREFIX}/${url}`));
  return response;
}

/**
 * A custom hook which makes a GET request to the server when given a url and returns the response data after it is resolved by the {@link resolve} function.
 * @param url - a string representing the url to make the request to. The format should be 'router/endpoint'
 */
const useData = (url) => {
  const [data, setData] = (useState < ResolvedReq) | (null > null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(url);
      setData(res);
    };

    fetchData();
    // getData(url).then((res) => setData(res.data));
  }, [url]);

  return data;
};

// https://stackoverflow.com/questions/53059059/react-hooks-making-an-ajax-request

/**
 * A function which makes a post request to the server when given a url and an optional body and returns the response data after it is resolved by the {@link resolve} function.
 * @param url - a string representing the url to make the request to. The format should be 'router/endpoint'
 * @param data - an optional object containing the data in json format to send to the server. Default is an empty object
 * @returns the response from the server after being resolved by the {@link resolve} function
 */
async function postData(url, data = {}) {
  const response = await resolve(axios.post(`${URLPREFIX}/${url}`, data));
  return response;
}
/**
 * A function which makes a put request to the server when given a url and an optional body and returns the response data after it is resolved by the {@link resolve} function.
 * @param url - a string representing the url to make the request to. The format should be 'router/endpoint'
 * @param data - an optional object containing the data in json format to send to the server. Default is an empty object
 * @returns the response from the server after being resolved by the {@link resolve} function
 */
async function putData(url, data = {}) {
  const response = await resolve(axios.put(`${URLPREFIX}/${url}`, data));
  return response;
}

/**
 * A function which makes a delete request to the server when given a url and an optional body and returns the response data after it is resolved by the {@link resolve} function.
 * @param url - a string representing the url to make the request to. The format should be 'router/endpoint'
 * @param data - an optional object containing the data in json format to send to the server. Default is an empty object
 * @returns the response from the server after being resolved by the {@link resolve} function
 */
async function deleteData(url, data = {}) {
  const response = await resolve(axios.delete(`${URLPREFIX}/${url}`, data));
  return response;
}

export { getData, putData, deleteData, postData, useData };
