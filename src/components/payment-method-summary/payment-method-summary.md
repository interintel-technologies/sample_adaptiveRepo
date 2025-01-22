# PAYMENT METHOD SUMMARY

![PAYMENT METHOD SUMMARY](https://i.postimg.cc/0yDPxmVP/Screenshot-2022-09-27-164423.png)

## Description

Provide a list of payment methods for users to pick a payment method by connecting to the payment method and also be able to change the account settings of the that payment method.

## Configuration

1. *Title* is contained in `page input name` eg `"Choose Payment Method Summary"`.
2. *Payments* methods are contained in the Data Source payload.

## Functionality

1. When user clicks on a payment method connect button, the ID of the payment method is retrieved and a new set of elements replace the connect button some of which include: account settings button and  remove text.
2. Clicking the account settings button allows users to change the settings of that particular payment method.
3. Clicking the remove text removes the ID from the return value and the connect button reappears.
4. Validation included in the element.
5. If their are default values, then the payment methods will be loaded as connected.

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
        ["1", "Cash on Delivery", "av:note", [], "Disabled"],
        ["5", "Mpesa", "mpesa", [{"Paybill Number": "33728374"}, {"Account Number": "10723374"}], "Active"]
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "string", "value": "icon", "label": "icon"},
        {"type": "array", "value": "details", "label": "details"},
        {"type": "string", "value": "status", "label": "status"}
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0
    }
  },
  "last_response": ""
}
```
