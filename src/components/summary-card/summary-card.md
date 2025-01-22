# SUMMARY CARD

![SUMMARY CARD](https://i.postimg.cc/SsQwjqVZ/Screenshot-2024-09-25-150255.png)

## Description

This is element displays a summary of 2 subjects(service) which when clicked open a get_section

### Functionalities

1. icons/items when clicked should switch to dialog view open and call and render the `service` in it's input variable
this service should return a `get_section` interface.

## Configuration

1. *ITEMS* - These are set in the data-source payload.
2. *currency* - set in the details object to indicate whether the data being displayed is currency or not. set in the details object with a key-value object of `{"currency":"Kes"}` . the value can be any currency type which will be displayed

## Data-source payload sample

``` json
{
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "get_profile": "Session Profile Captured",
    "data_source": {
        "cols": [
            {
                "label": "id",
                "type": "string",
                "value": "id"
            },
            {
                "label": "action_name",
                "type": "string",
                "value": "name"
            },
            {
                "label": "service",
                "type": "string",
                "value": "service__name"
            },
            {
                "label": "status",
                "type": "string",
                "value": "status__name"
            },
            {
                "label": "icon",
                "type": "string",
                "value": "icon__icon"
            },
            {
                "label": "value",
                "type": "string",
                "value": "value"
            }
        ],
        "rows": [
            [
                1,
                "Buy Airtime",
                "CREATE ETR SALES INVOICE",
                "ACTIVE",
                "icons:MdArrowOutward",
                50300
            ],
            [
                2,
                "Sell Airtime",
                "CREATE ETR PURCHASE ORDER",
                "ACTIVE",
                "icons:MdSouthEast",
                40000
            ]
        ],
        "lines": [],
        "groups": [],
        "data": [],
        "min_id": 0,
        "max_id": 0,
        "row_count": 2
    }
},
"action_id": 53,
"response_status": "00",
"overall_status": "00",
"last_response": ""
}
```
