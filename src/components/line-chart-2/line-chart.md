# SUMMARY CHART

![Summary Chart](https://i.postimg.cc/Qdz6rhsN/summary-chart.png)

## Description

displays a list of summaries which include month and services, e.g paybill,.

## Configuration

1. *SUMMARIES* - Comes from the datasource payload.
2. *Name* - Title of the summary-chart comes from element `Name` in env. e.g `Recent Transactions`

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
            ["2024-01", 20, 50, 30 ],
      ["2024-02",  25, 55, 35 ],
      ["2024-03",  30, 60, 40 ],
      ["2024-04",  22, 52, 32 ],
      ["2024-05",  27, 57, 37 ],
      ["2024-06",  32, 62, 42 ],
      ["2024-07",  24, 54, 34 ],
      ["2024-08",  29, 59, 39 ],
      ["2024-09",  34, 64, 44 ],
      ["2024-10",  26, 56, 36 ],
      ["2024-11",  31, 61, 41 ],
      ["2024-12",  36, 66, 46 ],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "month", "label": "month"},
         {"type": "number", "value": "Airtime", "label": "Airtime"},
         {"type": "number", "value": "Paybill", "label": "Paybill"},
         {"type": "number", "value": "PayTV", "label": "PayTV"}
       ],
       "row_count": 12,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```