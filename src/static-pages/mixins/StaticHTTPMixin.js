

/**
 * @typedef Response
 * @property {(Object | Array)} data
 * @property {String} response
 * @property {String} responseStatus
 * @property {String} status
 * @property {Boolean} isSuccessful
 */

import { STATUS_SUCCESS } from "../../TemplateLayout/SectionTemplate";

export const StaticHTTPMixin = BaseClass => class extends BaseClass {
    /**
     * @description fetch HTTP request
     * @param {String} url 
     * @param {String} method - GET || POST || PUT || DELETE 
     * @param {Object} body
     * @returns {Response}
     */
    async httpRequest(url, method, body, authToken) {
        const response = await fetch(url, this.#requestBuilder(method, body, authToken));
        if (!response.ok) {
            throw new Error ("Network response was not ok");
        }
        const contentType=response.headers.get('content-type');
        if(contentType && contentType.includes('text/html')){
            return response.text();
        }else{
            const parsedResponse = await JSON.parse(response.json());
            return {...parsedResponse, isSuccessful: parsedResponse.response_status === STATUS_SUCCESS}
        }
       
        
    }

    #requestBuilder(method, body, authToken) {
        const formattedBody = JSON.stringify(body);
        let requestObject = {};
        
        switch(method) {
            case "GET" :
                requestObject = {
                    method:method,
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
                break;
            case "POST" :
                requestObject = {
                    method:method,
                    body:formattedBody,
                    headers:{
                        "Content-Type": "application/json",
                        "X-CSRFToken":authToken
                    }
                }
                break;
            case "PUT" :
                requestObject = {
                    method:method,
                    body:formattedBody,
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
                break;
            case "DELETE" :
                requestObject = {
                    method:method,
                    headers:{
                        "Content-Type": "application/json"                        
                    }
                }
                break;
            default :
                console.error(`Method ${method} doesn't Exist`);
            break;
        }

        Object.assign(requestObject.headers,{"Authorization": `Bearer ${authToken}`, "Access-Control-Allow-Origin":"*"});
        return requestObject;
    }
};