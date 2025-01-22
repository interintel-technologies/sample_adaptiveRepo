# ADD ROLES

![ADD ROLES](https://i.postimg.cc/XvXgk9V2/Screenshot-2022-12-15-224614.png)

## Description

This is element is used to pick roles from a select that has the ability to pick multiple roles by clicking the add FAB. 

## CONFIGURATION

1. *ROLES* - Set in the data-source payload.

## FUNCTIONALITY

1. Clicking on the add FAB adds a role select.

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
         ["89", "Guest"],
         ["90", "Admin"],
         ["91", "Test Group 3"],
         ["98", "guru_june"],
         ["99", "ushindi_june"],
         ["100", "all_latest"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "label", "label": "label"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
}
```
