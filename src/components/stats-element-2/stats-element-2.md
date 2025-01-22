# STATS ELEMENT 2

![stats element 2](https://i.postimg.cc/j2r9KhZQ/stats-element2.png)

## Description

This element displays stats on card each with an icon, label and value.

## Configuration

1. *STATS* - These are set in the data-source payload.

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
        ["thumb-down", "Deliveries", "408"],
        ["thumb-down", "Deliveries", "408"],
        ["thumb-down", "Deliveries", "408"],
        ["thumb-down", "Deliveries", "408"],
        ["thumb-down", "Deliveries", "408"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "label", "label": "label"},
         {"type": "string", "value": "value", "label": "value"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
