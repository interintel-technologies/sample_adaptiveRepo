# confirm dialog

![Confirm Dialog](https://i.postimg.cc/rmNX8dG7/confirm-dialog.png)

## Description

A *confirm dialog* is a type of dialog box that is used to prompt the user to confirm an action before it is executed. When the confirm dialog appears, the user is presented with two options: Confirm and Cancel. The user can choose to either confirm the action by clicking `Confirm` or cancel it by clicking `Cancel`.

### Functionalities

when clicked should switch to dialog view open and call and render the `service`.
this service should return a `get_section` interface.


## Configurations

1. *Message* - Main message of the confirm dialog box set in the details object eg `"message":"Confirm Delete Product?"`
2. *Actions* - An array of objects that set up the buttons of the confirm dialog box that are set in the details. Each button has the following key value object details eg `[{"label": "Cancel", "color": "info", "service": "CANCEL"},{"label": "Accept", "color": "danger", "service": "Form"}]`
   
 - *label* - text of the buttons that displays. eg `"label":"confirm"` or `"label":"cancel"`
 - *color* - color of the buttons eg `"color":"danger"` or `"color":"light"` or `"color":"success"`
 - *service* - the event of the specific button e.g for cancel button `"service":"DELETE DIALOG"` and for confirm button `"service":"CONFIRM DIALOG"`
