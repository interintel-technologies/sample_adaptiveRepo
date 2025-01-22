# CATEGORY INPUT

![CATEGORY INPUT](https://i.postimg.cc/QxXVvt2T/category-input.png)

## Description

A select dropdown used to select a category and a single subcategory from it's list of subcategories and submits them;

## Configuration
1. *Name* - Set in the `Page Input Name` in the env
2. *Categories* - Set in the Datasource payload. each has a label,value and an array of sub_categories

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
                "label": "name",
                "type": "string",
                "value": "name"
            },
            {
                "label": "sub_categories",
                "type": "list",
                "value": "sub_categories"
            },
            {
                "label": "defaultValue",
                "type": "boolean",
                "value": "defaultValue"
            }
        ],
        "rows": [
            [
                "203",
                "Electronics",
                [{"name": "Computers", "defaultValue": true}, {"name": "Phones", "defaultValue": false}],
                true
            ],
            [
                "202",
                "Food & Drinks",
                [{"name": "Food", "defaultValue": false}, {"name": "Drinks", "defaultValue": false}],
                false
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
