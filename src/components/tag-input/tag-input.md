# TAG INPUT

![tag input](https://i.postimg.cc/hGjhLBjL/tag-input-dsv2.png)

## Description

tag picker and submit, multi-selection of options

## Configuration

- datasource dataname defaultValue. 
- the required datasource response structure must have id and name columns for LIST and keys for DATA
    `id` will the submitted value on selection and `name` will be the displayed label
- pre-selection, values passed in kind, comma separated
- required, set min>0 or required to True

## Structure

**SerializableElement**

### getValue

returns the current selected tags joined by comma

### Mixins

- InputMixin

### Core

The list items are loaded via **DATASOURCE**

### Functionality

1. When required=False, a tag selection is optional
2. When required=True, a tag selection is require
3. if kind is not null,it's a list of id's to preselect (edit-mode)

### DataSource payload sample

``` json
    {
        "response_status": "00",
        "overall_status": "00",
        "action_id": 53,
        "response": {
            "subdomain_details": "Subdomain not in request.",
            "data_source": {
            "rows": [
                ["89", "Test Group 1"],
                ["90", "Test Group 2"],
                ["91", "Test Group 3"],
                ["98", "guru_june"],
                ["99", "ushindi_june"],
                ["100", "all_latest"],
            ],
            "data": [],
            "lines": [],
            "cols": [
                {"type": "string", "value": "id", "label": "id"},
                {"type": "string", "value": "name", "label": "name"}
            ],
            "row_count": 6,
            "min_id": 0,
            "groups": [],
            "max_id": 0},
        },
        "last_response": "",
    }
```
