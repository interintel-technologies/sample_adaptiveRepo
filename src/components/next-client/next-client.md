# NEXT CLIENT

![NEXT CLIENT](https://i.postimg.cc/rpHLRNsZ/next-client.png)

## Description

This element is used to show the next client from  upcoming appointments.

## Configuration

1. *APPOINTMENTS* - contained in the datasource payload"s rows & columns.
2. *PROFILE* - contained in the datasource payload's lines.

## Datasource payload sample

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["Today, Fri Mar 25 2022", "Fri Mar 25 2022", "1", "Eye Problem"],
      ],
      "data": [],
      "groups": [],
      "cols": [
        {"type": "string", "value": "upcomingAppointment", "label": "Upcoming Appointment"},
        {"type": "string", "value": "lastAppointment", "label": "Last Appointment"},
        {"type": "string", "value": "totalVisits", "label": "Total Visits"},
        {"type": "number", "value": "reason", "label": "Reason"},
      ],
      "row_count": 6,
      "min_id": 0,
      "lines": [{
         "age": 23,
         "name": "Nathan Machoka",
         "gender": "Male",
         "image": "src/themes/dsv1.0/img/mastercard.svg"
       }],
      "max_id": 0},
  },
  "last_response": "",
}
```
