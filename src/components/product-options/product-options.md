# PRODUCT OPTIONS

![PRODUCT OPTIONS](https://i.postimg.cc/s2JHCyTw/image.pnghttps://i.postimg.cc/fL0KJjFZ/Screenshot-2022-03-28-145919.png)

## Description

This element is used to generate product options from a list of attributes and packs.

## Configuration

1. *ATTRIBUTES & PACKS* - Set in the details object. e.g `{"attributes":[{"name":"Flavour"},{"name":"Size"},{"name":"Weight","units":["kg","g"]},{"name":"Color"},{"name":"Volume","units":["l","ml"]}]}`.
2. *Editing default values* - to edit default values, set the values in the datasource payload data section. Note, this will change the UI significantly.

## Datasource payload sample

```json
    {
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [],
      "data": [[
        {
        "attributes": [
            {
            "name": "Flavour",
            "value": "Vanilla",
            "level": 1,
            "measurementUnit": null
            },
            {
            "name": "Volume",
            "value": "500",
            "level": 2,
            "measurementUnit": "ml"
            }
        ],
        "variant_cost": 500,
        "pack": null
        },
        {
        "attributes": [
            {
            "name": "Flavour",
            "value": "Vanilla",
            "level": 1,
            "measurementUnit": null
            },
            {
            "name": "Volume",
            "value": "500",
            "level": 2,
            "measurementUnit": "ml"
            }
      ],
      "variant_cost": 0,
      "pack": {
        "name": "Box",
        "quantity": 16,
        "contains": "Pieces"
      }
    }
  ]
],
      "lines": [],
      "cols": [],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": ""
}
```