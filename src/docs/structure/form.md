## structure

### form-render
form rendering and step navigation

- implementation that override firstUpdated must call super for auto-submit to work



###  form
form type, and e-list positioning

### e-list
rendering of elements

- must implement the class invalid-e-l
used for styling invalid serializable elements that don't 
implement validation appropriately 

###  element-loader
loading and initialization of elements

 
 ## form submission steps
 > TODO move and reference location in switch docs
 
 1. We check if service column is null/NONE. index(11)
> TODO can the service column be null/NONE

 2. If the value is not none,
 the service column value is appended to the go to location /GOTO/[SERVICE] (/GOTO/index(11))

 3. If the value is none,
 the value of the default value becomes the form POST/GET location
 depending on the page-input-group method as well.

 In this case,
 /GOTO/ is not appended as we assume its a URL being passed, hence the SERVICE column missing
 if index(11) === null:
 then location = index(5)
 else:
 location = /GOTO/index(11)
