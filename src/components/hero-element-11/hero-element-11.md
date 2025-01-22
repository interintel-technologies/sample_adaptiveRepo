# HERO ELEMENT 11

![HERO ELEMENT 11](https://i.postimg.cc/y8fggs6Y/Screenshot-2022-09-08-160539.png)

## Description

Used on a landing page, displaying a title text, subtitle text, button that has a link to a destination, and image slides that auto-play.

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
2. *SUBTITLE* - contained in the `details` object with the key `text`and the value to be the title you want e.g `"text":"your_subtitle_here"`
3. *DESTINATION/PATH* - contained in the `details` object with the key `path`and the value to be the url/link to the destination. e.g `"path":"https//mipay.cash"`
4. *BUTTON TITLE* - contained in the `details` object with the key `button_title`and the value to be the title you want to be displayed on the button. e.g `"button_title":"Get Started"`
5. *IMAGES and DESCRIPTIONS* -  contained in arrays in the Datasource Payload's row object with the image being the third position in the array and description bring the second position in the array.Note The array positions start from zero.  

### Functionality

1. The button when clicked should redirect the user to a destination url.
2. When one of the dots is clicked an image will be shown based on its position.

### Datasource payload sample

```json
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
          "label": "description",
          "type": "string",
          "value": "description"
        },
        {
          "label": "image",
          "type": "string",
          "value": "image"
        }
      ],
      "rows": [
        [
          "224",
          "Register & Set up Business",
          "Register & Set up Business",
          "dsc_imagelist_image/set_up.png"
        ],
        [
          "225",
          "Upload products",
          "Upload Products",
          "dsc_imagelist_image/undraw_uploading_go67-removebg-preview.png"
        ],
        [
          "226",
          "Setup Deliveries",
          "Inventory Management & Analysis",
          "dsc_imagelist_image/Data_report-pana.png"
        ],
        [
          "227",
          "Publish your Store",
          "Publish Your Store",
          "dsc_imagelist_image/publish_store-removebg-preview.png"
        ]
      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 4
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
