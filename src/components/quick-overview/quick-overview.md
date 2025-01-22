# QUICK OVERVIEW

![Quick Overview](https://i.postimg.cc/nVYMB3rG/quick-overview.png)

## Description

This element displays an overview as a list of items eac with an icon, label, and a description. The element also has filters which will be used to load different sets of data.

## Configuration

1. *NAME* - The name of the element is contained in `page input name` eg `"Select how you'd want to add your products"`.
2. *OVERVIEWS* - This is set in the data-source payload.
3. *FILTERS* - These are set in the details object with a key of `filters` and the value being an object. E.g `{"filters": {"year": ["2021", "2022", "2020", "2019"], "month": ["January", "Febuary", "March", "April"]}}`.

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
         ["store", "4900 Orders", "Awaiting process"],
         ["store", "4900 Orders", "Awaiting process"],
         ["store", "4900 Orders", "Awaiting process"],
         ["store", "4900 Orders", "Awaiting process"],
         ["store", "4900 Orders", "Awaiting process"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "label", "label": "label"},
         {"type": "string", "value": "description", "label": "description"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
