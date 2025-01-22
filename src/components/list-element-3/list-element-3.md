# LIST ELEMENT 3

![List Element 3](https://i.postimg.cc/x8ZG2t93/Screenshot-2024-12-17-153847.png)

## Description

Displays a list of items each with 2 values one on the extreme left and the other on the extreme right.

## Configuration

1. *Title* - Comes from Page input Name e.g: `"Services"`.
2. *List Items* - Comes from the data-source payload.

## Functionality

1. None.

## Data-list element sample

``` json
{
  "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         "Inventory management",
         "Point of sale",
         "Supply order management",
         "Receive and make payments through diverse payment methods",
         "Flexible credit for shopkeepers to allow purchase goods from manufacturers"
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "label", "label": "label"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
