# DEAL COUNTDOWN

![DEAL COUNTDOWN](https://i.postimg.cc/zvJGzyJ9/Screenshot-2023-01-11-184634.png)

## Description

An element that displays a countdown, some text and images showing the period at which a deal will last.

## Configuration

1. Data is dynamically set in the `datasource`.

### Functionality

1. When the shop now button is clicked, it calls a service tith the deal id as its params.

### Datasource payload

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["1", "Tudor Black Strap Watch", "Leather Light Watch", 1673537758000,  "https://m.media-amazon.com/images/I/81nj6IlZpVL._UY445_.jpg", "https://m.media-amazon.com/images/I/81nj6IlZpVL._UY445_.jpg"]
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "object", "value": "title", "label": "title"},
        {"type": "string", "value": "description", "label": "description"},
        {"type": "number", "value": "deadline", "label": "deadline"},
        {"type": "string", "value": "leftImage", "label": "leftImage"},
        {"type": "string", "value": "rightImage", "label": "rightImage"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
