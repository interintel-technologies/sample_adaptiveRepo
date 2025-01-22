# PRICE CARDS 2

![PRICE CARDS 2](https://i.postimg.cc/GtRx1JSS/price-cards-2.png)

## Description

Displays a group of cards used to showcase prices across different categories.

## Configuration

1. *Prices* - set in the data-source payload.

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
         ["1", "Basic SMS", 5200, ["Very Important", "Important", "Normal", "Low"], "Monthly"],
         ["2", "Bulk SMS", 5200, ["Very Important", "Important", "Normal", "Low"], "Monthly"],
         ["3", "Super SMS", 5200, ["Very Important", "Important", "Normal", "Low"], "Monthly"],
         ["4", "Premium SMS", 5200, ["Very Important", "Important", "Normal", "Low"], "Monthly"],

         ["11", "Basic Email", 5200, ["Very Important", "Important", "Normal", "Low"], "Yearly"],
         ["12", "Bulk Email", 5200, ["Very Important", "Important", "Normal", "Low"], "Yearly"],
         ["31", "Super Email", 5200, ["Very Important", "Important", "Normal", "Low"], "Yearly"],
         ["41", "Premium Email", 5200, ["Very Important", "Important", "Normal", "Low"], "Yearly"]

       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "label", "label": "label"},
         {"type": "number", "value": "price", "label": "price"},
         {"type": "array", "value": "points", "label": "points"},
         {"type": "string", "value": "category", "label": "category"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
