# RECEIPT ELEMENT

![RECEIPT ELEMENT](https://i.postimg.cc/8PGypfkv/Screenshot-2024-10-30-043631.png)
![Receipt](https://i.postimg.cc/j5m6JYDZ/Screenshot-2024-11-19-160021.png)

## Description

This is element displays a receipt for a transaction including the user's details, can also download a pdf of the receipt. Works as a modal


## Configuration

1. *total*- set in the details object with a key-value pair of e.g `"total":"100,000"`
2. *Button Caption* - the title of the button that closes the receipt set in the details object with a key-value pair of e.g `"caption":"Back To Form"`

2. *ITEMS* - These are set in the data-source payload.

## Data-source payload sample

``` json
{
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "get_profile": "Session Profile Captured",
    "data_source": {
        "cols": [
            {
                "label": "Ref Number",
                "type": "string",
                "value": "ref_number"
            },
            {
                "label": "Payment Time",
                "type": "string",
                "value": "payment_time"
            },
            {
                "label": "Payment Method",
                "type": "string",
                "value": "payment_method"
            },
            {
                "label": "Sender Name",
                "type": "string",
                "value": "sender_name"
            }
        ],
        "rows": [
            [
                "000085752257",
                "15 March 2024, 8:30 pm",
                "Mpesa",
                "Dennis",
            ]
        ],
        "lines": [],
        "groups": [],
        "data": [],
        "min_id": 0,
        "max_id": 0,
        "row_count": 1
    }
},
"action_id": 53,
"response_status": "00",
"overall_status": "00",
"last_response": ""
}
```
