/**
 * parser of the response from /api/get-my-host/
 * the response applies in API calls
 */
export class LocationIP {
  constructor(jsonObjectPayload) {
    this._ip = jsonObjectPayload['ip'];
    this._lat = jsonObjectPayload['lat'];
    this._lng = jsonObjectPayload['lng'];
  }

  get ip() {
    return this._ip;
  }

  get lat() {
    return this._lat;
  }

  get lng() {
    return this._lng;
  }
}
