# PRODUCT LIST


![PRODUCT LIST](https://i.postimg.cc/nMbwgZFb/Screenshot-2024-10-17-122541.png)

## Description

This is element displays products being offered in a table

### Functionalities

1. icons when clicked should switch to dialog view open and call and render the `service` in it's input variable
this service should return a `get_section` interface.

## Configuration

1. *ITEMS* - These are set in the data-source payload.
2. *service* - name of the service that functions when the button is clicked. set in the details object with a key-value object e.g `{"service":"ADD PRODUCT"}`

## Data-source payload sample

``` json
{
  
 "response": {
    "subdomain_details": "Subdomain not in request.",
    "get_profile": "Session Profile Captured",
    "data_source": {
      "cols": [
        {
          "label": "index",
          "type": "string",
          "value": "id"
        },
        {
          "label": "Item",
          "type": "string",
          "value": "item"
        },
        {
          "label": "Price",
          "type": "number",
          "value": "price"
         
        },
        {
          "label": "Qty",
          "type": "number",
          "value": "qty"
        },
       
      ],
      "rows": [
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],
        [150854744,"Ariel",5,5],

      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 1000
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
