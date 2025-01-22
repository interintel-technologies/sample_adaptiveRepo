# SUMMARY RETURNS

![Summary Returns](https://i.postimg.cc/V6nkgTjG/summary-returns.png)

## Description

Displays a summary of returned items/info on the dashboard
The items are loaded from the datasource.

## Configuration
1. *FILTERS* - These are set in the details object with a key of `filters` and the value being an object. E.g `{"filters": {"year": ["2021", "2022", "2020", "2019"], "month": ["January", "Febuary", "March", "April"]}}`.

### Datasource payload sample

```json
{
    "response": {
        "subdomain_details": "Subdomain not in request.",
        "data_source": {
            "cols": [
                {
                    "label": "id",
                    "type": "string",
                    "value": "id"
                },
                {
                    "label": "label",
                    "type": "string",
                    "value": "label"
                },
                {
                    "label": "value",
                    "type": "string",
                    "value": "value"
                },
            {
                "label": "preValue",
                "type": "string",
                "value": "preValue"
            },
            
            ],
            "rows": [
                [
                1,
                "Total sales Value",
                "KES. 456.4k",
                "KES 234.5k",
                ],
                [
                2,
                "Orders Copleted",
                "KES 233.1k",
                "KES 234.5k",
                ],
                [
                3,
                "Orders Copleted",
                "174",
                "132",
                ],
                [
                4,
                "Orders Copleted",
                "16",
                "16",
                ],
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 5
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}
```