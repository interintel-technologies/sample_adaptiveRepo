The project maintains google's javascript style guidelines, guarded by eslint
https://github.com/google/eslint-config-google



# folder structure
```
docs
images
src
|───actions
|───components
    |───templates
          canvas-page.js canvas page base
          landing-page.js service page base
          page-view-element.js template base
          payments-page.js payments base
          section-page.js section base
          service-page.js service base 
          view-404.js 404 base 
        
        adaptive-ui.js app shell
        e-list.js form element manager, step sections and form serialization
        element-loader.js element loader and container
        form.js
        form-render.js
        shared-styles.js
        snack-bar.js
|───core
      | libs
      | mixins
        base-element.js
        logger.js
        serializeable-element.js

|───elements 
|   └───base - elements base classes that need to be extended to implement UI
        fingerprint-element.js - has no ui
        hidden-element.js - has no ui
        redirect-url.js - has no ui
        
        missing-element.js  placeholder when an element couldn't be loaded
        

|───reducers
|───themes - themes
|       bare - starting point for new themes
            components
                elements  - element theme ui
                templates - template pages theme ui
            icons
            styles
            test
        bulkit
        dsv1.0
|───styles
    store.js
    
test
package.json

```

# app workings

the app is designed to support different themes, 
this is done by abstraction of the core application logic such as networking

and providing interfaces for theme customization, 
this makes it possible for the themes to only implement the html and css

the app entry point or shell is `adaptive-ui.js`, 

it is the container of all other components and loads the theme entry templates
the entry templates define where specific content of the page goes such as the nav,  content and footer

- canvas Canvas page template
- service Service page template
- landing landing page template
- payments payments page
- section section page

the various page templates except the section page have two view modes



### main
this is the default view mode in all templates that support it, it's rendered from a [gateway/institution interface](get_interface.md) type of payload

templates that support this view mode also provide:

  - an API for switching to the dialog view mode and back 
  - handles the dialog sections history stack (dialog sections are explained in a moment)


### dialog
it is also refereed to as the section page view mode, 
a new page is rendered within the **main** view mode from a [section interface](get_section.md) type of payload


this mode is activated through navigation to a section page from a **main** or another **section** page,
examples of a such navigation include:
 - clicking on a SERVICE BUTTON or HYPERLINK  or MENU SERVICE BUTTON elements
 - clicking of actions from DATALIST row

the **main** whole page content might be replaced by the new page or a dialog can be used, hence the name

the section page is usually loaded from a service call


when there are sub-sequent sections that were loaded from the current section, 
 navigating back to the main view mode will active the previous section. 
 
 this is achieved by storing the sub-sequent sections in a back-stack by the **main**



## Structure

The templates are responsible for the overall page structure and behavior such as navigation

the template structure is divided into

### Core
this contains shared functionality across templates

the core is defined in src/components/templates

### Navigation
Main in app Navigation is controlled by location hashes
the current location hash will be used to select the current active pageGroup and page

> TODO In App navigation using section pages
> TODO In App navigation using form steps


### User Interface
this contains the interface declaration 
it contains the interface HTML markup and s CSS 

the UI part of templates are defined in components/templates directory of a theme




## Section Page 
- the section page template is used to render sections (get_section payload) loaded from a service call
- the section page will only load the first page under the first page group
- the section page params should initialize with the current location query params (this is same for all template pages)
- subsequent sections loaded from the get section should be saved to a back stack for back navigation ( this has been 
implement for a dialog view mode but not yet for the section page template)

and so..,
 
at the core of the section page is the section-page component (SectionPageBase)

### section-page.js
as both the section page template and dialog view modes render a section interface,
this component is used in rendering the sections from a service call or by manually passing through the payload property,
 (the manual passing happens when saving and loading from the back stack), the back stack is managed saved by the parent 
 template loading the view mode.
 
 properties
    payload type IicParser, this should triggers a render on update

on first initialization, the query params from the current window location are used as the section params

the component exposes a list of methods
1. _loadServiceParams
    loads a service, additional params can be passed
    
2. _renderPayload
    parses an object payload using IicParser


# technologies  
    javascript
    polymer
    d3js
    jspdf
    mqtt

# asset pipeline
the production deployment is a built and optimized module packaged using the polymer-cli build tool,
> TODO links to polymer build tool 

this is configurable using the `polymer.json`.
Since all elements are dynamically loaded at runtime, care must be taken to have them included in the 
build process, more on this [here](element autoloading process) 




