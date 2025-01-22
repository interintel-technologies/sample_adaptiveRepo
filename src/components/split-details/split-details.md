# SPLIT DETAILS

![SPLIT DETAILS](https://i.postimg.cc/qB1QgzCs/split-details.png)

## Description

This element displays the details of a list of items each on a card with a name and details on the left and right of the card.

## Configuration

1. *DETAILS* - This is set in the data-source payload.

## Functionality

1. None.

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
         ["yorghut", {"Due": 156664}, {"Overdue": 156664}]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "name", "label": "name"},
         {"type": "object", "value": "left", "label": "left"},
         {"type": "object", "value": "right", "label": "right"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
