# SPECIALIZATION SELECTOR

![SPECIALIZATION SELECTOR](https://i.postimg.cc/65r00kx6/special.png)

## Description

This is an element that displays specializations in cards that have  a title allowing a user to pick one or more specializations from the available ones.

## CONFIGURATION

1. *specializations* - An array of specializations to display set in the data-source payload.

## FUNCTIONALITY

1. Clicking a card stores the id that will be submitted when the next button is clicked.

## Datasource payload

```json
  {
    "response_status": "00",
    "overall_status": "00",
    "action_id": 53,
    "response": {
      "subdomain_details": "Subdomain not in request.",
      "data_source": {
        "rows": [
          ["motorcycle"],
          ["Vehicle Delivery"],
          ["Milk Delivery"],
          ["Boda Delivery"],
          ["Kuku Delivery"]
        ],
        "data": [],
        "lines": [],
        "cols": [
          {"type": "string", "value": "specialization", "label": "specialization"},        
        ],
        "row_count": 6,
        "min_id": 0,
        "groups": [],
        "max_id": 0},
    },
    "last_response":"",
  }
```
