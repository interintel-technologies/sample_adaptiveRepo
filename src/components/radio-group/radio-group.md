# RADIO GROUP

![Radio Group](https://i.postimg.cc/xTTdmdq1/radio-group.png)

## Description

An element that contains a group of radio inputs with a label and description text.Also, the object containing the data has a key of selected which determines if the radio input should be checked or not when the element is rendered.

## Configuration

1. *TITLE* - The title of the element is contained in `page input name` eg `"Select how you'd want to add your products"`.
2. *RADIOS* - Radios come from the Datasource Payload

### Functionality

1. When the form containing the element is submitted, it returns the id of the checked radio.

## Data-source payload

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
            ["radio_1","Bulk Upload","Upload your products in bulk",false],
            ["radio_2","Single Upload","Upload your products in one by one",false],
       ],
       "data": [],
       "lines": [],
       "cols": [
            {"type": "string", "value": "id", "label": "id"},
            {"type": "string", "value": "label", "label": "label"},
            {"type": "string", "value": "description", "label": "description"},
            {"type": "string", "value": "selected", "label": "selected"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
}

```