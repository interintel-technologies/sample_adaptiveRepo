# Element
the element is the basic webcomponent used display the most basic units of an interface.
the elements are structured to be independent and have no direct dependency from core modules  

each element represents an input variable [variable type](link to switch docs) on the switch

## Structure
the ability of the elements to be independent is made possible by a structure that allows
the element to be loaded and initialized appropriately,

this allows to only load what is required on the interface and when it is required

1. initialization
- loading of imports
- extension from a base element
> todo add initialization from no dependency
- some are initialized from a polymer element
        |
        |
        |
2. application of mixins
        |
        |
        |
3. name assignment
        |
        |
        |
4. theme initialization     
     extending the theme base class and overriding
     implementation such as `constructor`
        |
        |
5. ui implementation 
    application of theme styles 
    `render` implementation 
        |
        |
6. registration
    custom element registration
    per theme registration
    
    


### Loading process

the core of this logic described below is in the `ElementLoader`.

the elements loading processing is made possible and controlled by a naming convention, 
this is combined with es6 [Dynamic import()](https://developers.google.com/web/updates/2017/11/dynamic-import) provides an auto-loading ability

basically the naming convention is a way to allow for the element module file location to be resolved from the element name 

it currently tries the naming convention and if it gets a 404, it then checks the configs

> The element loader also contains a static map referencing element names to their module files but this not recommended
for new elements and only kept for referencing elements that don't have a UI and so don't need to implement render and 
hence are not extended by the themes e.g FINGERPRINT ELEMENT, HIDDEN ELEMENT

> TODO update switch docs to advice against single worded variable types

#### Naming

the element file name should match the element name lower-cased and spaces replaced with -  
e.g TEXT INPUT -> text-input.js
  
the element class name in the file should be the same too  but camel-cased

single word elements like SUBMIT should have -element append   
i.e SUBMIT -> submit-element (the element name in the file should be submit-element)  

#### Location
elements to be auto-loaded will be looked for the in the `elements/autoload` folder  
single worded elements should have the `-element` appended and their location should be `elements/`

> elements with paths defined in element loader can work from anywhere in project root, NOT RECOMMENDED  

#### Initialization
all elements auto-loaded must implement `init`, it is called by the element-loader on module import resolution
> TODO confirm on the cases this is must, there is a base implementation so loader calls won't fail
 
if you implement init, you must first call `super.init` (more on why below)

#### Layout
The initialized elements are laid out in a block-inline container and horizontal positioning is controlled by the width,

a responsive width is configurable from the payload by passing a defination for the various screen sizes.

the container layout grid columns are specified in fractions of 24

a valid defination is 3 values for 3 groups of screen sizes, pipe separated SMALL|MEDIUM|LARGE 

e.g   24|12|6  means, of the full container width, take  24/24 on Small, 12/24 on Medium and 6/24 on Large screens


#### Build
an entry should also be added in the polymer.json `fragments` entry to have the element included during [assets building](assets pipeline)

### API
this describes on the rules and structuring convention for internal element development.

#### Base Class
All elements must extend a base class.    
Core functionality that is required in grouping of elements are applied by base classes

the available base classes which should be extended by new elements include

1. BaseElement
2. SerializableElement

##### Base Element
this differentiates elements representing page-inputs on switch from other elements,  
it is at the top of the base classes hierarchy and all other classes extend from it directly or indirectly

###### Methods

1. **init** initialization of `PElement` and `ElementLoader` properties
    
        /**
         * 
         * @param pElement PElement
         * @param loader ElementLoader
         */
        init(pElement, loader){
            super.init(pElement,loader);
        }
        
    for more on [PElement]() and [ElementLoader]() 

     

##### Serializable Element
this differentiates Elements that can be Serialized into form values for submission,  
this is also used to differentiate elements that should be validated when submitting forms
all elements that should be serialized during form submissions must extend serializable element

###### Modes
an element of this base can rendered in two modes

1. create-mode - allows for fresh input
2. edit-mode - has a previous input value to be edited

the mode will depend on how the previous element value has been passed for editing but *edit-mode* requires that
the previous value be rendered in the appropriate format

###### Methods 

1. **getName** form value name
2. **getValue**

    can be a single generic type i.e string or number    
    or an object of key values  (should it be a [Map?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) )

3. **validate**

    returns this.Validation(true,'');

4. **valid(validation)**
 
    called if validation passed, can be used to update the view with the `validation.message`

5. **invalid(validation)**

    called if validation failed, can be used to update the view with the `validation.message`

# new element development
# form handling
