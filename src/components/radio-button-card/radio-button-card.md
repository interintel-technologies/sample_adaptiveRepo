# RADIO BUTTON CARD

![Radio Button Card](https://i.postimg.cc/d3v7wyDB/Screenshot-2024-08-30-102608.png)

## Description

An element that contains a group of radio inputs with a label and description text.Also, the object containing the data has a key of selected which determines if the radio input should be checked or not when the element is rendered.

## Configuration

1. *TITLE* - The title of the element is contained in `page input name` eg `"Select how you'd want to add your products"`.
2. *RADIOS* - Radios come from the Datasource Payload
3. *SERVICE* - The dynamic services that will be called on submit, where the submitted data is sent. Included in the `details` object of the element i.e  `"services":["card-payment","airtel-payment","mpesa-payment"]`.

### Functionality

1. When the form containing the element is submitted, it returns the id of the checked radio.

## Data-source payload

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
                "label": "name",
                "type": "string",
                "value": "name"
            },
            {
                "label": "icon",
                "type": "string",
                "value": "icon__icon"
            }
        ],
        "rows": [
          [
            0,
            "M-PESA",
            "m-pesa"
        ],            
        [
            1,
            "AIRTEL MONEY",
            "airtel-money"
        ],
        [
            2,
            "CARD",
            "card"
        ]          
        ],
        "lines": [],
        "groups": [],
        "data": [],
        "min_id": 0,
        "max_id": 0,
        "row_count": 3
    }
},
"action_id": 53,
"response_status": "00",
"overall_status": "00",
"last_response": ""
}

```