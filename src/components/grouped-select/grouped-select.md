# GP SELECT

![GP SELECT](https://i.postimg.cc/cHT3rBn8/Screenshot-2023-01-17-095702.png)

## Description

a list view with support for selection and submission

## Functionalities

1. It should display a group list selected. I.e: Countries, Cities, Schools etc
2. Should provide a list of elements and be able to pick one of the user’s choice
3. Should allow the user to navigate through the list of elements that must be displayed
4. Should have one element selected by default

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
       ["1", "Caroline Maina"],
       ["2", "Carol Maina"],
       ["3", "Njenga Maina"],
       ["4", "Caroline Atieno"],
     ],
     "data": [],
     "lines": [],
     "cols": [
       {"type": "string", "value": "id", "label": "id"},
       {"type": "string", "value": "customerName", "label": "Customer Name"},
     ],
     "row_count": 6,
     "min_id": 0,
     "groups": [],
     "max_id": 0},
 },
 "last_response": "",
}
```
