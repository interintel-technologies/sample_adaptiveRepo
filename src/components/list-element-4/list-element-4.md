# LIST ELEMENT 4

![List Element 4](https://i.postimg.cc/XJGVmxyy/list-element-4.png)

## Description

This element displays a list of items each with a name, label and value.

## Configuration

1. *NAME* - The name should be placed in the  `name`/`page input`  e.g `Orders`.
2. *LIST_ITEMS* - The list items are set in the data source payload.
3. *IS_VALUE_CURRENCY* - Incase the value of items is a currency (Kenya Shilling), then set it in the details object with a key of `isValueCurrency` and the value being a boolean. e.g `"isValueCurrency": true`.

### Functionality

1. None.

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
         ["Today", "0 orders", 53240],
         ["Today", "0 orders", 53240],
         ["Today", "0 orders", 53240],
         ["Today", "0 orders", 53240]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "label", "label": "label"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "number", "value": "value", "label": "value"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
