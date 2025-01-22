# LIST ELEMENT 2

![List Element 2](https://i.postimg.cc/Pqn93Tkf/list-element-2-nikobizz.png)

## Description

Displays a list of items each with a title and a value which is an array of values.

## Configuration

1. *Title* - Comes from Page input Name e.g: `Why Choose us`.
2. *List Items* - Comes from the data-source payload.

## Functionality

1. None.

## Data-list element sample

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        "Robust features tailored to your business needs",
        "User-friendly interface for effortless navigation",
        "Facilitated connections between shopkeepers and distributors",
        "Seamless payment integration for smooth transactions",
        "Flexible credit lines empowering shopkeepers to purchase goods",
        "Reliable customer support to assist you every step of the way"
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "label", "label": "label"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",   
}
```