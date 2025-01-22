# TERMS CONDITIONS

## Description
a checkbox and text that is configurable but and the end of the text is hard coded "terms and conditions"
in which the terms and conditions text serves a link that will be opened on a different tab on click here the 
user will read the embeded terms and conditions


## Configuration
**Text**
- The text that the user will read is configured from the page input name `this.e.name`  an example is "I have read the following "
**Link**
- The link to the terms and conditions comes fromt the details object with the key of `path` and value of a string that will be the URL e.g `{"path":"http://termsandconditions/"}`


## Structure
**SerializableElement**
### Mixins 
- UtilsMixin



### Functionality
1. if the checkbox is not checked, the input should be invalid
