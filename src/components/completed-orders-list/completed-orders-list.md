# COMPLETED ORDERS LIST

![Completed Orders List](https://i.postimg.cc/SsjGBYhf/Screenshot-2022-03-30-144404.png)

## Description

This element displays a list of completed orders describing the order, and functionality to return items.

## Configuration

1. *ORDERS* - Set int the data-source payload.

## Data-source payload sample

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["1", {"name": "Tudor Black Strap Watch", "image": "https://m.media-amazon.com/images/I/81nj6IlZpVL._UY445_.jpg", "size": "medium", "color": "Black", "price": 1500, "quantity": 3}, 1647854985197, 1647854985197],
        ["2", {"name": "Cool Gloves", "image": "https://images.ulta.com/is/image/Ulta/2299445", "size": "medium", "color": "Black", "price": 450, "quantity": 2}, 1647854985197, 1647854985197],
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "object", "value": "product", "label": "product"},
        {"type": "number", "value": "date", "label": "date"},
        {"type": "string", "value": "deliveryDate", "label": "deliveryDate"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
