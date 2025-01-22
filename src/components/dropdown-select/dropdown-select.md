# DROPDOWN SELECT

![DROPDOWN SELECT](https://i.postimg.cc/zBCQsJsW/Screenshot-2023-04-24-203651.png)

## Description

Provide a dropdown of selectable menu items.  
The list items are loaded from the **DATASOURCE**

## Configuration

1. *OPTIONS* - A list of objects each with a value and label. Set in datasource payload
2. *pre-selection* -  the already selected option. Set in `kind`. E.g `"dd3"`
3. *HINT* - Hint that appears in the input if there is nothing in the input. Set in `details` with a key of `hint`
4. *HELP* - Text that appears below input. Set in `details` with a key of `help`

## Structure

**SerializableElement**

### Mixins

- DataSourceMixin
- ThemeMixin
- UtilsMixin

### Core

The list items are loaded via **DATASOURCE** call and concatenate to string.
The list items after the [index/id] are the label displayed  
First item is the value on selection

### Functionality

1. When required=False, should not autoselect a value
2. When required=True, autoselect the first item
3. If kind is not null,it's a value, ignore above and pre-select
4. Columns in `concat_exclude` in `details` should be ignored

## Data-source payload sample

``` json
{
    "response": {
        "subdomain_details": "Subdomain not in request.",
        "get_profile": "Session Profile Captured",
        "data_source": {
            "cols": [
                {
                    "label": "iso2",
                    "type": "string",
                    "value": "iso2",
                    "search_filters": true
                },
                {
                    "label": "name",
                    "type": "string",
                    "value": "name",
                    "search_filters": true
                },
                {
                    "label": "defaultValue",
                    "type": "boolean",
                    "value": "name",
                }
            ],
            "rows": [
                [
                    "AD",
                    "Andorra",
                    false
                ],
                [
                    "AE",
                    "United Arab Emirates",
                    true
                ],
                [
                    "AF",
                    "Afghanistan",
                    false
                ],
                [
                    "AG",
                    "Antigua and Barbuda",
                    false
                ]
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 246
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}
```
