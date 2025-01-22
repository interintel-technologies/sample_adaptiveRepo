# HORIZONTAL LIST

![HORIZONTAL LIST](https://i.postimg.cc/266wjNpM/Screenshot-2024-08-28-155028.png)

## Description

This is element displays services being offered in a flex box overflowing x  each item having an image and service text being offered. is horizontally scrollable when items are more than 3.

### Functionalities

1. icons when clicked should switch to dialog view open and call and render the `service` in it's input variable
this service should return a `get_section` interface.

## Configuration

1. *ITEMS* - These are set in the data-source payload.

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
                "label": "color",
                "type": "string",
                "value": "color"
            }
        ],
        "rows": [
            [
                1,
                "Sales",
                "CREATE ETR SALES INVOICE",
                "ACTIVE",
                "icons:MdInfo",
                null
            ],
            [
                2,
                "Purchases",
                "CREATE ETR PURCHASE ORDER",
                "ACTIVE",
                "icons:MdViewList",
                null
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
