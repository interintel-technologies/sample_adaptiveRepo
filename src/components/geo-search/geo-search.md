# Geo search
**GeoSearch** component is a custom element that provides a search box with Google Maps integration for searching locations and retrieving their latitude and longitude coordinates. 

## Properties
The GeoSearch component has the following properties:

**lat** (Number): The latitude coordinate of the selected location.
**lng** (Number): The longitude coordinate of the selected location.
**zones** (array) An array of strings representing the zone names.

This allows you to specify a list of zone names to be used for initializing the map and defining the search bounds. The zones represent specific areas or regions.

eg: ``` javascript 
    zones="${['Zone A', 'Zone B', 'Zone C']}" 
    ```

## Events
The GeoSearch component emits the following event:

**location-selected:** Dispatched when a location is selected in the search box. The event carries an object with the latitude (lat) and longitude (lng) coordinates as the event detail.

## Usage
``` javascript
'{"APIKey": "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", "hint": "search here", "zones": ["Nairobi", "Kiambu"]}'
```