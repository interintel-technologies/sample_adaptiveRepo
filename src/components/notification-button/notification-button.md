# NOTIFICATION BUTTON

![Notification Button](https://i.postimg.cc/15NGjJQq/Screenshot-2022-12-19-142754.png)

## Description

This element is used to display notifications for today and yesterday.

## Configuration

1. none
*NOTE* - To view the notifications, make sure that the time is yesterday or today. Go [here](https://www.epochconverter.com/) to get a suitable timestamp.

## Functionality

1. none

## Data-source payload sample

```json
{
  "response_status":"00",
  "overall_status":"00",
  "action_id":53,
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "rows": [
        ["group-work", "Alert!", "Occaecat ad sint elit ex sunt officia labore velit proident ipsum duis labore non.", 1645705085000],
        ["group-work", "Alert!", "Occaecat ad sint elit ex sunt officia labore velit proident ipsum duis labore non.", 1645705085000],
        ["group-work", "Alert!", "Occaecat ad sint elit ex sunt officia labore velit proident ipsum duis labore non.", 1645618685000],
        ["group-work", "Alert!", "Occaecat ad sint elit ex sunt officia labore velit proident ipsum duis labore non.", 1645618685000],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "title", "label": "title"},
         {"type": "string", "value": "description", "label": "description"},
         {"type": "number", "value": "time", "label": "time"}
       ],
        "min_id":0,
        "max_id":0,
        "row_count":0
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
