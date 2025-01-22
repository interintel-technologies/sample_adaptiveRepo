# STEPS PROGRESS 2

![STEPS PROGRESS 2](https://i.postimg.cc/CKMwpkcq/steps-progress-2.png)

## Description

Displays a series of steps in a horizontal list to show progress.

## Configuration

1. *STEPS* - These are set in the data-source payload.

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
        ["Order Placed", "Saturday 13/06/2021", "2 days", false],
        ["Item out for delivery", "Monday 15/06/2021", "2 days", false],
        ["Sorting center", "Wednesday 17/06/2021", null, true],
        ["Delivered", "Friday 19/06/2021", null, false],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "title", "label": "title"},
         {"type": "string", "value": "subtitle", "label": "subtitle"},
         {"type": "string", "value": "timeTaken", "label": "timeTaken"},
         {"type": "boolean", "value": "isActive", "label": "isActive"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
