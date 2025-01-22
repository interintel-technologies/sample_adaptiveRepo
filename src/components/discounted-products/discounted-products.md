# DISCOUNTED PRODUCTS

![DISCOUNTED PRODUCTS](https://i.postimg.cc/g0vWzS20/Screenshot-2023-01-12-144535.png)

## Description

An element used to show discounted products by displaying the percentage discount and name of a product.

## Configuration

1. *DISCOUNTED_PRODUCTS* - set in the `datasouce payload`.

## Structure

1. SectionPElementDsc

### Mixins

- DataSourceMixin
- UtilsMixin

### Functionality

1. Clicking on the shop item calls a service.

### Datasource payload

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["1", "Tudor Black Strap Watch", "10%"],
        ["2", "Tudor Black Strap Watch", "10%"],
        ["3", "Tudor Black Strap Watch", "30%"]
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "string", "value": "percentage", "label": "percentage"}
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
