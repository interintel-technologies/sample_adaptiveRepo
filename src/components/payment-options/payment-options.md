# PAYMENT OPTIONS

![Payment Options](https://i.postimg.cc/NFMhmh5W/payment-options.png)

## Description
a listing of various payment options available 
the options are loaded from datasource as a LIST

## Configuration
- a datasource query should be configured 
> TODO expected query structure 
expects a list of items from crm PaymentOptions 

## Structure
**SerializableElement**

### Mixins 
- UtilsMixin
- DataSourceMixin

### Core
the options are grouped by the method from the LIST

### Functionality 
1. returns the id of the selected option as the form value

## Data-soyrce payload sample

```json
{
    "response_status": "00",
    "overall_status": "00",
    "action_id": 53,
    "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
        "rows": [
        ["1","Cash on Delivery",[{"id":"1"},{"record":"record 1"}]],
        ["2","Mpesa",[{"id":"2"},{"record":"record 3"}]]
        ],
        "data": [],
        "lines": [],
        "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "array", "value": "options", "label": "options"},
        ],
        "row_count": 6,
        "min_id": 0,
        "groups": [],
        "max_id": 0},
    },
    "last_response": "",
}
```