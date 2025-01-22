# PRODUCT IMAGE UPLOAD

![PRODUCT IMAGE UPLOAD](https://i.postimg.cc/fL0KJjFZ/Screenshot-2022-03-28-145919.png)

## Description

An element used to upload product images from the users files and also displays previously uploaded images giving users the ability to remove some or all previously uploaded images.

## Configuration

1. *TITLE* - The title of the element is contained in `page input name` eg `"Product Images"`.
2. *PREVIOUS_UPLOADED_IMAGES* - Previous uploaded images come from data-source payload.

## Functionality

1. Clicking on the add images button opens the device file manager so that users can pick images to choose from.
2. Clicking on the red button on the top left part of an image container removes the image from the values to be returned.

## Data-source payload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [["https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"], ["https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"], ["https://orifon.co.ke/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png"]],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "image", "label": "image"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
