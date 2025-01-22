# Section 11

![Section 11](https://i.postimg.cc/xdBg5h8M/Screenshot-2024-09-05-170521.png)

## Description

Used to display content that has TITLE,SUBTITLE and a card that contains an icon, title and description
The items are loaded from the **DATASOURCE**

## Configuration

- **TITLE** - Gotten from `page input name` column in the 

- **SUBTITLE** -   Gotten from `details object` with a key of `subtitle` e.g `{"subtitle":"This is a subtitle"}`  

- **Card Icon** - is gotten from the datasource payload *name column* that is a font awesome class, separated with a | character on the right side eg. `"Messaging|fa fa-phone"`

- **Card title** - is gotten from the datasource payload *name column*  separated with a | character found on the left side eg. `"Messaging|fa fa-phone"`

- **Card description** - is gotten from the datasource payload *description column*

## Structure

SectionPElementDsc

### Mixins

- DataSourceMixin
- UtilsMixin

### Functionality

1. Display Cards with icon title and description and animated slightly up on hover.
2. Checks if icon is set, if not it will display image from the DataSource payload.


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
          "205",
          "Bulk SMS",
          "Reach is important to any business. With bulk SMS, you can reach over 98% of your target audience through SMS.",
          "dsc_imagelist_image/bulk_sms.png"
        ],
        [
          "206",
          "Bulk Email / Email Marketing",
          "Nenasasa also invovles sending commercial emails to your contact group either as transactional, advertisement or brand awareness emails.",
          "dsc_imagelist_image/bulk_email.png"
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
