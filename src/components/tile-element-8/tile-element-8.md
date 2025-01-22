# TILE ELEMENT 8

![Tile Element ](https://i.postimg.cc/Nf7GpX1R/tile-element-8.png)

## Description

Displays tiles of services offered with each tile having an icon, title and description

## Configuration

1.Tiles comes from the datasource payload.

## Functionality

1. None.

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
            "label":"icon",
            "type":"string",
            "value":"icon"
            }
        ],
        "rows": [
            [
            "1",
            "UI/UX Design",
            "Sometimes features require a short description",
            "https://i.postimg.cc/6qQDZw7P/columns-3-svgrepo-com.png"
            ],
            [
            "2",
            "Logo Branding",
            "Sometimes features require a short description",
            "https://i.postimg.cc/tRS0j1wG/draw-compass-svgrepo-com.png"
            ],
            [
            "3",
            "App/Web Development",
            "Sometimes features require a short description",
            "https://i.postimg.cc/MHrgb4Vp/smartphone-svgrepo-com.png"
            ],
            [
            "4",
            "Service Integration",
            "Sometimes features require a short description",
            "https://i.postimg.cc/26Gs335v/computer-device-electronic-svgrepo-com.png"
        
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
