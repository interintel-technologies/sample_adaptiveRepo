import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Response, COMMAND_REDIRECT } from '../parsers/response';




// Define the call function outside to make it exportable
export const call = async (service, params, parseResponse = true) => {
  console.log("parans are ",params);
  
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const baseUrl = () => {
    let fullHost = `${protocol}//${hostname}:${port}`;
    if (window.process?.env?.NODE_ENV === 'development') {
      fullHost = fullHost.substr(0, fullHost.length - 1);
    }
    return fullHost;
  };

  const headers = {
    'X-CSRFToken': window.CSRFTOKEN,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };

  try {
    if (window.NO_NETWORKING) {
      console.warn('window.NO_NETWORKING=true');

      const requestResponse = window.TEST_PAYLOAD;
      const response = new Response(requestResponse);
      return response;
    } else {
      
      let params = {};
      // Merge REQUEST_PAYLOAD into params
      Object.keys(window.REQUEST_PAYLOAD).forEach((key) => {
        params[key] = window.REQUEST_PAYLOAD[key];
       console.log("params key",params[key]);
       console.log('params window key ', params[key]);
      });
   

      const config = {
        url: `${baseUrl()}/GOTO/${service}/`,
        method: 'POST',
        headers: headers,
        data: params,
        withCredentials: true,
      };

      const req = await send(config);
      const requestResponse = req.data;

      try {
        if (parseResponse) {
          const response = new Response(requestResponse);

          if (response.containsServiceCommand(COMMAND_REDIRECT)) {
            const redirect = response.parse(COMMAND_REDIRECT, false);
            const redirectTo = redirect.url;

            const l = document.createElement('a');
            l.href = redirectTo;

            if (l.pathname === window.location.pathname && l.search === window.location.search) {
              window.location.hash = l.hash;
              window.location.reload();
            } else {
              window.location.href = redirectTo;
            }
          }
          return response;
        } else {
          return requestResponse;
        }
      } catch (error) {
        console.error('An error occurred while processing the response:', error);
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};


export const callAxios = async (service, params = {}, parseResponse = true) => {
 
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  // Construct the base URL based on the environment
  const baseUrl = () => {
    let fullHost = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
    if (window.process?.env?.NODE_ENV === 'development') {
      fullHost = fullHost.slice(0, -1); // Remove last character in dev mode
    }
    return fullHost;
  };

  const headers = {
    'X-CSRFToken': window.CSRFTOKEN,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };

  // Handle offline mode where networking is disabled
  if (window.NO_NETWORKING) {
    console.warn('window.NO_NETWORKING=true');
    const requestResponse = window.TEST_PAYLOAD;
    return new Response(requestResponse);
  }

  // Log `params` and `window.REQUEST_PAYLOAD` separately for debugging


  // Ensure `params` and `REQUEST_PAYLOAD` are both objects
  const externalParams = typeof params === 'object' ? params : {};
  const requestPayload = typeof window.REQUEST_PAYLOAD === 'object' ? window.REQUEST_PAYLOAD : {};

  // Merge `params` with `REQUEST_PAYLOAD`
  const mergedParams = { ...externalParams, ...requestPayload };
 
  // Axios config object
  const config = {
    method: 'POST',
    url: `${baseUrl()}/GOTO/${service}/`,
    headers: headers,
    data: mergedParams,
    withCredentials: true,
  };

  try {
    // Make the API call using axios
    const response = await axios(config);
    const requestResponse = response.data;

    if (parseResponse) {
      const parsedResponse = new Response(requestResponse);

      // Handle redirect command if found in the response
      if (parsedResponse.containsServiceCommand(COMMAND_REDIRECT)) {
        const redirect = parsedResponse.parse(COMMAND_REDIRECT, false);
        const redirectTo = redirect.url;
        handleRedirect(redirectTo); // Use a helper function to process redirect
      }
      return parsedResponse;
    } else {
      return requestResponse;
    }
  } catch (error) {
    console.error('An error occurred while processing the response:', error);
    throw error;
  }
};


// Function to handle redirect logic
const handleRedirect = (url) => {
  const l = document.createElement('a');
  l.href = url;

  if (l.pathname === window.location.pathname && l.search === window.location.search) {
    window.location.hash = l.hash;
    window.location.reload();
  } else {
    window.location.href = url;
  }
};

// Function to handle sending requests
const send = async (config) => {
  return axios(config);
};

export const callServiceParams = async (service, params) => {

  try {
    const response = await call(service, params);
   
    return response;
  } catch (error) {
    throw error;
  }
};

// Higher-order component withHttp
const withHttp = (WrappedComponent) => {
  const HttpHOC = (props) => {
    const [protocol, setProtocol] = useState(window.location.protocol);
    const [hostname, setHostname] = useState(window.location.hostname);
    const [port, setPort] = useState(window.location.port);

    const baseUrl = () => {
      let fullHost = `${protocol}//${hostname}:${port}`;
      if (window.process?.env?.NODE_ENV === 'development') {
        fullHost = fullHost.substr(0, fullHost.length - 1);
      }
      return fullHost;
    };

    return (
      <WrappedComponent
        {...props}
        protocol={protocol}
        hostname={hostname}
        port={port}   
        send={send}
        call={call}
        baseUrl={baseUrl}
      />
    );
  };

  return HttpHOC;
};

export default withHttp;
