# SOCIAL MEDIA POINTS

![Social Media Points](https://i.postimg.cc/632rL77z/social-media-points.png)

## Description

This element is used to toggle and edit points to be shared across different social media platforms.

## Configuration

1. *SOCIAL_MEDIA_PLATFORMS* - Configured in the data-source payload and contains.

## Functionality

1. When user toggles a switch for a social media platform, a service request is made sending the social media type and the toggle state(true or false).
2. When a user clicks on the save button in the edit points modal, a service request is made sending the social media type and the new points.

### Data-source Payload Sample

```json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["Instagram", true, 150],
         ["Facebook", true, 150],
         ["Twitter", false, 150],
         ["SMS/WhatsApp", true, 150]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "type", "label": "type"},
         {"type": "boolean", "value": "toggle", "label": "toggle"},
         {"type": "number", "value": "points", "label": "points"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```