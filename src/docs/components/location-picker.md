# LOCATION PICKER

## Description
map view and location picker

## Configuration
- requires the google maps API key to be set in `this.e.kind` 


## Structure
**SerializableElement**
### Mixins 
- UtilsMixin

### Core
Returns the picked location coordinates as below
```js
 return this.lng+','+this.lat;
```

### Functionality
1.	displays a map with a marker to select a location
2.  has a search field for locations
3.  the search field auto-suggests locations on typing 
