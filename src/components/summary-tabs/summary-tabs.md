# SUMMARY TABS

![SUMMARY TABS](https://i.postimg.cc/RC7ccwDB/Screenshot-2022-12-19-195504.png)

## Description

displays a list of summaries which include a label and a value, e.g on dashboard.

## Configuration

1. *SUMMARIES* - Comes from the datasource payload.

### Functionality

1. Display Quick Summary Boxes with labels and value

### Datasource payload Sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
        ["thumb-up", "Household", "2020-07-20 13:00:00+00:00", "1270"],
        ["thumb-down", "Food Products", "2020-07-20 13:00:00+00:00", "641"],
        ["thumb-down", "Drinks", "2020-07-20 13:00:00+00:00", "123"],
        ["thumb-down", "Snacks", "2020-07-20 13:00:00+00:00", "97"],
        ["thumb-down", "Deliveries", "2020-07-20 13:00:00+00:00","408"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "label", "label": "label"},
         {"type": "string", "value": "date", "label": "date", "filters": ["Snacks", "Drinks"]},
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
