# Themes

themes provide a way of implementing different looks 
as such, themes follow a defined structure to cover  the different areas of the interface,
the structure consists of


## Components
- these are the main components required for the interface, 
- this components mostly only override the `render` function as they only implement interefaces,
- the usually extend a base core component or apply mixins for core functionality   
- the can implement more functions relating to dom operations 

Components are further divided in elements and templates

Elements contain an override of the element look, this folder also contains extra components that might be required 
by an element e.g datalist-element

Templates contain an override of a template look



## Styles
this is the location of css styles that might need to be re-used across the components and elements



## Icons
location of icons

## Test
Location unit and integration tests of a theme
