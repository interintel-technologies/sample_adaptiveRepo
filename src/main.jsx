import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { appStore } from './slices/appSlice.js'
import AdaptiveUi from './adaptiveui.jsx'


export function convertToJson(payload) {
  function parseIfJsonString(value) {
      try {
          return JSON.parse(value);
      } catch (e) {
          return value; // Return the original value if it's not JSON
      }
  }

  // Parsing JSON strings in response.get_interface and response.get_section
  if (payload.response) {

      if (payload.response.get_interface) {
          payload.response.get_interface.this_page_inputs = parseIfJsonString(payload.response.get_interface.this_page_inputs);
          payload.response.get_interface.all_pages = parseIfJsonString(payload.response.get_interface.all_pages);
      }
      if (payload.response.get_section) {
          payload.response.get_section.this_page_inputs = parseIfJsonString(payload.response.get_section.this_page_inputs);
      }
  }

  return payload;
}
const hideLoader = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  };
// Usage
const jsonPayload = window.PAYLOAD;

window.parsed_payload = jsonPayload


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
     <Provider store={appStore}>
    <AdaptiveUi appTitle={window.APPTITLE}  csrfToken = {window.CSRFTOKEN}  payloadjson={jsonPayload}  />

    </Provider>
  </>,
)

hideLoader();