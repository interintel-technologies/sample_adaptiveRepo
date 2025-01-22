# PAYMENT SELECTOR

![Payments Selector](https://i.postimg.cc/SRN2G6jP/payment-selector.png)

## Description

Provide a list of payment options to choose from.  
The list items are loaded from the datasource payload. Also has a title.

## Configuration

1. Title is contained in `page input name` eg `"Choose Payment Method"`
2. Payments are contained in the Data Source payload

## Functionality

1. When user clicks on a payment card, the card border color turns to the default color and a check appended on the border.
2. Validation included in the element.

### Datasource payload sample

```json
    {
    "response_status": "00",
    "overall_status": "00",
    "action_id": 53,
    "response": {
        "subdomain_details": "Subdomain not in request.",
        "data_source": {
        "rows": [
            ["1","Mipay","src/themes/dsv1.0/img/mipay.png"],
            ["2","Mpesa","src/themes/dsv1.0/img/mpesa.png"],
            ["3","Mastercard","src/themes/dsv1.0/img/mastercard.png"],
            ["4","Visa","src/themes/dsv1.0/img/visa.svg"],
            ["5","Cash","src/themes/dsv1.0/img/visa.svg"]
        ],
        "data": [],
        "lines": [],
        "cols": [
            {"type": "string", "value": "id", "label": "id"},
            {"type": "string", "value": "name", "label": "name"},
            {"type": "string", "value":"image", "label":"image"}
        ],
        "row_count": 6,
        "min_id": 0,
        "groups": [],
        "max_id": 0},
    },
    "last_response": "",
}
```
