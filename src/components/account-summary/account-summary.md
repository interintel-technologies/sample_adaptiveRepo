# ACCOUNT SUMMARY

![ACCOUNT SUMMARY](https://i.postimg.cc/63v4V2cR/Screenshot-2022-12-19-141909.png)

## Description

This element displays a list of summaries about an account each with an icon, name, and a value.

## Configuration

1. *SUMMARIES* - Set in the datasource payload.

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
         ["bug-report", "Orders", "4"],
         ["pets", "Points", "1"],
         ["polymer", "Wishlist", "12"],
         ["shop", "Saved Items", "5"],
        ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "value", "label": "value"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
