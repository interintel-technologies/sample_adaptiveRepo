# SUMMARY BOXES

![Summary Boxes](https://i.postimg.cc/hjbSwM7t/summary-boxes-update.png)

## Description

displays a quick summary of items, e.g on dashboard
The items are loaded from the **DATASOURCE** i.e via the `data` and `group`

## Configuration

- datasource dataname defaultValue
- the required datasource response structure is DATA

- EmptyMessage
`details['empty_message'] = 'Empty message to show user'`
Used for the empty view elemnt to display a message to the user that there is no data available

- Gateway
`details['gateway'] = 'nenasasa'`
Used to determine the color of the image the value can be:
`'mipay'`
`'nenasasa'`

### Mixins

- DataSourceMixin
- UtilsMixin

### Core

The list items are loaded via **DATASOURCE** call

### Functionality

1. Display Quick Summary Boxes with labels and value

### DataSource Payload sample

```json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["nenasasa", "Ecommerce"],
        ["mipay", "Ecommerce2"],
        ["3", "Ecommerce3"],
        ["4", "Ecommerce4"]
      ],
      "data": [[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}],[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}],[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}],[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}],[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}],[{"count":"Ecommerce2","name":"Ecommerce2","description":"Ecommerce2","kind":"Ecommerce2","type":"Ecommerce2"}]],
      "lines": [],
      "cols": [
        {"type": "string", "value": "customerName", "label": "id"},
        {"type": "string", "value": "phoneNumber", "label": "title"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": ["1","2","3","4","5","6"],
      "max_id": 0},
  },
  "last_response": ""
}
```
