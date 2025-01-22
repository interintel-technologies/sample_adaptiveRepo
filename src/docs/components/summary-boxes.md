# SUMMARY BOXES

## Description
displays a quick summary of items, e.g on dashboard
The items are loaded from the **DATASOURCE**

## Configuration
- datasource dataname defaultValue, 
- the required datasource response structure is DATA

- EmptyMessage
`details['empty_message'] = 'Empty message to show user'` 
Used for the empty view elemnt to display a message to the user that there is no data available

- Gateway
`details['gateway'] = 'nenasasa'` 
Used to determine the color of the image the value can be:
`'mipay'`
`'nenasasa'`


## Structure
**BaseElement**
### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE** call     


### Functionality
1.	Display Quick Summary Boxes with labels and value


