# SERVICE ATTENDANT SELECTOR

## Description

![SERVICE ATTENDANT SELECTOR](https://i.postimg.cc/7hNdPRrC/Screenshot-2022-05-18-172811.png)

This element is used to pick a service and an attendant.

## Configuration

1. *DATA* - Data for the element is set in the `data-source` payload.

## Data-source payload

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         [["Consultansy", "Therapy", "Checkup", "Examination"], ["Dr. Noah Wekesa", "Dr. Peter Kamau", "Dr. Jane Chebet", "Dr. Anita Kyalo"], 60, 3200]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "array", "value": "services", "label": "services"},
         {"type": "array", "value": "attendants", "label": "attendants"},
         {"type": "number", "value": "duration", "label": "duration"},
         {"type": "number", "value": "charges", "label": "charges"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
