# STORE SUMMARY

![store summary](https://i.postimg.cc/T2Cp42Q1/store-sum.png)

## Description

This element displays a grid of summaries each with a label, value and a change which is a percentage. A positive change means increase and vice versa with 0 indicating no change.

## Configuration

1. *NAME* - This is set in the  `name`/`page input`  e.g `'Subdomain'`.
2. *SUMMARIES* - These are set in the data-source payload.

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
        ["Total Customers", 700, 18],
        ["Total Customers", 1200, 43],
        ["Total Customers", 760, -18],
        ["Total Customers", 700, 18],
        ["Total Customers", 700, 20],
        ["Total Customers", 1100, 35],
        ["Total Customers", 700, 23],
        ["Total Customers", 800, 18],
        ["Total Customers", 700, -1],
        ["Total Customers", 700, 94],
      ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "label", "label": "label"},
         {"type": "number", "value": "value", "label": "value"},
         {"type": "number", "value": "change", "label": "change"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
