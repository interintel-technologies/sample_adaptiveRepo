# MANUAL SLIDESHOW

![MANUAL SLIDESHOW](https://i.postimg.cc/zXvGTdwj/Screenshot-2022-09-08-154044.png)

## Description

Displays slides of images with text of the respective image. The images are loaded from the **DATASOURCE**

## Configuration

1. _Title_ - Comes from the page input name.
2. _SubTitle_ - Comes from the details object with the key `sub_title` and the value the subtitle text eg) . `"sub_title":"Nenasasa user manual guide"`
3. _slides_ - set in the datasource payload.

## Structure

1. _BaseElement_

### Mixins

- DataSourceMixin
- UtilsMixin

### Core

The list images are loaded via **DATASOURCE** call

### Functionality

1. Display Slides of images
2. Provides a way to navigate through the images and pop up text using next and previous buttons

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
          "236",
          "Adjustable Reward Points",
          "You can easily adjust the reward points you offer as per the unit of sales made.",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        ],
        [
          "237",
          "Generate QR Codes",
          "Once you register your business for our Loyalty Program Automation services on the Website or App, We generate a WhatsApp QR code customers can use to become part of your Loyalty program.",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        ],
        [
          "238",
          "Detailed Reports",
          "We give you reports and analytics about customer behavior and the overall performance of your business that can aid in decision-making and strategies to improve product and service delivery.",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        ]
      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 3
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
