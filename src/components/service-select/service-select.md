# SERVICE SELECT

![SERVICE SELECT](https://i.postimg.cc/25by3VPH/Screenshot-2023-02-28-132330.png)

## Description

This element contains services displayed as cards that show an icon and the service name.

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`.
2. *SERVICES* -  is set in the datasource payload.

## Functionality

1. Clicking the next button, submits the entire form returning the service value.

## Datasource payload sample

```json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
        ["communication:business", "red", "ecommerce", "jijijiij"],
        ["communication:business", "red", "ecommerce", "jijijiij"],
        ["communication:business", "red", "ecommerce", "jijijiij"],
        ["communication:business", "red", "ecommerce", "jijijiij"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "color", "label": "color"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "url", "label": "url"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
