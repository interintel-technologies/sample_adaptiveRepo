# GEO MAP

![Geo Map](https://i.postimg.cc/BbvdpMnq/Screenshot-2023-06-21-184907.png)

[Official Docs](https://developers.google.com/maps/documentation/javascript/overview)

## Description

A google map that loads a map with a marker

## Configuration

1. *TITLE* - Title of the location to be marked set in the `page name`.
2. *API_KEY* - This key is needed to use the google maps api. Set in the details object with a key of `apiKey` and the value being a string. e.g `"apiKey": "www"`
3. *MAP_CENTER* - This is the position the map shows when first loaded. Set int the details object with the key being `mapCenter` and the value being an object with 2 key value pairs including `position` and `zoom`  of `lat` and `lng` and the values of each being a float. e.g `"mapCenter": {"position": {"lat": -34.397, "lng": 150.644}, "zoom": 8 }`.
4. *MARKERS* - Position a dynamic marker oon the map. Set in the details object with the key being `markers` and the value being an array of objects each having 2 key value pairs: keys include `position` with the value being an object with  `lat`, `lng`, and `title`. e.g `"markers": [{"position": {"lat": -34.397, "lng": 150.644}, "title": "Marker"}]`
