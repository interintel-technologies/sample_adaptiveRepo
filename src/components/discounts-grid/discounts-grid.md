# DISCOUNTS GRID

![DISCOUNTS GRID](https://i.postimg.cc/c1BXdztr/Screenshot-2023-01-12-151222.png)

## Description

This is element displays discounts in a grid with each grid item having an image, discount text, and name of the item to be discounted.

## Configuration

1. *DISCOUNTS* - These are set in the data-source payload.

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
        ["89", "Baskets", "Upto 25% OFF - ON ALL WEARABLES", "https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"],
        ["90", "Baskets", "Upto 25% OFF - ON ALL WEARABLES.", "https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"],
        ["91", "Baskets", "Upto 25% OFF - ON ALL WEARABLES", "https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"]
       ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "string", "value": "text", "label": "text"},
        {"type": "number", "value": "image", "label": "image"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
