# TILE ELEMENT 3

![TILE ELEMENT 3](https://i.postimg.cc/FzptCmh1/tile-element-3.png)

## Description

Used for displaying title text, tile image, and a description in a vertical approach.

## Configuration

1.Tile data comes from the datasource payload.

### Functionality

N/A

### Datasource payload sample

``` json
{
   "response_status":"00",
   "overall_status":"00",
   "action_id":53,
   "response":{
   "subdomain_details":"Subdomain not in request.",
   "get_profile":"Session Profile Captured",
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
            "155",
            "Customize messages",
            "Customize messages according to your clientele, modify the outlook of your message by creating templates, manage and add contact groups. What’s more, you can save your templates and schedule them for as long as a month",
            "dsc_imagelist_image/Customize_messages.png"
            ],
            [
            "156",
            "Reach contact groups",
            "Our contact group functionality enables you to add and manage contact groups. Thus you can create targeted messages, moreover, send to various target groups analyze the data  and obtain desired results",
            "dsc_imagelist_image/Reach_contact_group.png"
            ],
            [
            "157",
            "Purchase Float",
            "Purchase float easily from the client portal and send Emails, SMS to your customers hustle free. With NenaSasa you can stay afloat with adequate float balance to keep you engaged with your customers.",
            "dsc_imagelist_image/Purchase_float.png"
            ],
            [
            "158",
            "Short Code Request",
            "Our Shortcode services allows you to hold two-way conversations with your customers, With our shortcode service, you can now experience unlimited customer engagement, and get feedback straight from the source..",
            "dsc_imagelist_image/Short_code_request.png"
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
"last_response":""
}
```
