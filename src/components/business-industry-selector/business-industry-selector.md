# BUSINESS INDUSTRY SELECTOR

![Business Industry Selector](https://i.postimg.cc/R0pcRbqY/Screenshot-2022-12-19-204243.png)

This is an element that displays business industries in cards that have an icon, a title, and a description allowing a user to pick one from the available ones.

## Configuration

1. Business industries are set in the data-source payload.

## Functionality

1. Clicking the next button submits the selected business industry name.

## Data-source payload sample

```json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["motorcycle", "Motorcycle Delivery", "Motorcycle Delivery"],
         ["motorcycle", "Vehicle Delivery", "Motorcycle Delivery"],
         ["motorcycle", "Milk Delivery", "Milk Delivery"],
         ["motorcycle", "Boda Delivery", "Motorcycle Delivery"],
         ["motorcycle", "Kuku Delivery", "Kuku Delivery"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "description", "label": "description"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
