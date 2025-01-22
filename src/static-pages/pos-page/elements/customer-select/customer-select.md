# Customer Select

## Description

The **CustomerSelect** web component is a dropdown selector that allows the user to search for and select a customer. It displays the name, phone number, and image of the selected customer, and allows the user to add a new customer.

## Properties

The **CustomerSelect** component has the following properties:

- customers: an array of objects representing the list of customers
- searchTerm: a string representing the search term entered by the user
- isModalOpen: a boolean indicating whether the add customer modal is open
- searchResults: an array of objects representing the search results
- isInputHidden: a boolean indicating whether the input field is hidden
- isDropdownOpen: a boolean indicating whether the dropdown menu is open
- selectedCustomer: an object representing the currently selected customer

## Methods

The CustomerSelect component has the following methods:

- **handleInput(event):** a method that is called when the user enters a search term. It sets the searchTerm property and updates the dropdown menu visibility.
- **handleSelectCustomer(customer):** a method that is called when the user selects a customer. It sets the selectedCustomer property and hides the dropdown menu and add customer modal.
- **handleClose():** a method that is called when the user closes the customer card. It sets the selectedCustomer property to null and updates the component.
- **handleAdd():** a method that is called when the user clicks the add customer button. It opens the add customer modal.
- **handleModalClose():** a method that is called when the user closes the add customer modal. It hides the modal.

## Usage

``` html
<customer-select></customer-select>
```

## Datasource payload sample

``` json
{
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "get_profile": "Session Profile Captured",
    "data_source": {
      "cols": [
        {
          "label": "id",
          "type": "string",
          "value": "id"
        },
        {
          "label": "name",
          "type": "string",
          "value": "name"
        },
        {
          "label": "productId",
          "type": "string",
          "value": "productId"
        },
        {
          "label": "image",
          "type": "string",
          "value": "image"
        },
        {
          "label": "number",
          "type": "string",
          "value": "number"
        },
        {
          "label": "email",
          "type": "string",
          "value": "email"
        }
      ],
      "rows": [
        [
          "1",
          "Anwar Magara",
          "ID234569",
          "https://miro.medium.com/v2/resize:fit:2400/1*nItcZgJee2KmMTcshAg4Xg.jpeg",
          "0710865696",
          "sadatt254@gmail.com",
        ],
        [
          "2",
          "Jane Doe",
          "ID234569",
          "dsc_imagelist_image/set_up.png",
          "0776762266",
          "sadatt254@gmail.com",
        ],
        [
          "3",
          "John Doe",
          "ID234569",
          "dsc_imagelist_image/set_up.png",
          "07123456789",
          "sadatt254@gmail.com",
        ],
        [
          "5",
          "Dean Winchester",
          "ID234569",
          "dsc_imagelist_image/set_up.png",
          "0710865696",
          "sadatt254@gmail.com",
        ],
      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 4
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
};
```
