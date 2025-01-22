# SERVICE BUTTON

## Description

a labeled button that works like hyperlink expect for the styling, 
opens a service dialog on click

## Configurations

1. *NAME* - The name of the element is contained in `page input name` eg `"Select how you'd want to add your products"`
2. *DESCRIPTION*- comes from the details section under the key `description` and the value be the description of the service button. eg. `{"description":"Apply for a loan here"}`.
3. *PADDING* - comes from the details section under the key `description` and the value be the description of the service button. eg. `{"description":"Apply for a loan here"}`

### Functionalities

1. when clicked should switch to dialog view open and call and render the `service` in it's input variable
this service should return a `get_section` interface.
