# LIST ELEMENT 5

![List Element 5](https://i.postimg.cc/ZK095YMJ/Screenshot-2024-08-28-153446.png)

## Description

This element displays a list of items each with a label,date and value.

## Configuration

1. *LABEL* - The label should be placed in the  `label`/`page input`  e.g `Pay TV`.
2. *LIST_ITEMS* - The list items are set in the data source payload.
3. *IS_VALUE_CURRENCY* - Incase the value of items is a currency (Kenya Shilling), then set it in the details object with a key of `isValueCurrency` and the value being a boolean. e.g `"isValueCurrency": true`.
4. *LINK* -  Set in the details object with a key of `link` and the value being an object. e.g `"link": {"path": "https://interintel.co.ke", "label": "Go to"}`. set for detemining the href for the `view all` button. Opens in  a new tab.
5. *VIEW* - dynamic service set in the details object with a key-value object. key is `service` and value being the service name` e.g `"view":"view-page"`. Opens a get section for each item in the list taking the item id as a parameter. 
`this.pl._dialog(service, id);`
5. *POPULATE* - dynamic service that populates the list set in the details object with a key-value object. key is `service` and value being an string for the service name. e.g `"populate":"populate_list"`

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
       ["0","Pay TV", "15 March 2024, 8:30 pm", 120],
       ["1","Pay TV", "15 March 2024, 8:30 pm", 89.24],
       ["2","Pay TV", "15 March 2024, 8:30 pm", 64.85],
       ["3","Pay TV", "15 March 2024, 8:30 pm", 64.85],
       ["4","Pay TV", "15 March 2024, 8:30 pm", 64.85],
       ["5","Pay TV", "15 March 2024, 8:30 pm", 64.85],
       ["6","Pay TV", "15 March 2024, 8:30 pm", 64.85],
       ["7","Pay TV", "15 March 2024, 8:30 pm", 64.85],

     ],
     "data": [],
     "lines": [],
     "cols": [
      {"type": "number", "value": "id", "label": "id"},
       {"type": "string", "value": "label", "label": "label"},
       {"type": "string", "value": "date", "label": "date"},
       {"type": "float", "value": "value", "label": "value"},
     ],
     "row_count": 6,
     "min_id": 0,
     "groups": [],
     "max_id": 0},
 },
 "action_id": 53,
 "response_status": "00",
 "overall_status": "00",
 "last_response": ""
};
```
