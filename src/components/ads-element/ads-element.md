# ADS ELEMENT

![Ads Element](https://i.postimg.cc/bvfm80SY/image.png)

## Description

This element that displays multiple ads in a carousel that auto plays.

## Configuration

1. *ads* - set in the datasource
2. *autoPlayInterval* - Set in the details object with a key value object. Time set is in milliseconds with the default time being `10000` seconds. To change this, set the interval in the details object with a key of `autoPlayInterval` eg.`"autoPlayInterval": 9000`

## Datasource payload sample

```json
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
            "label": "paragraph",
            "type": "string",
            "value": "paragraph"
            },
            {
            "label": "image",
            "type": "string",
            "value": "image"
            }
        ],
        "rows": [
            [
            "1",
            "Seamless airtime top-ups for Telkom, Safaricom and Airtel. Stay connected effortlessly!",
            "https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"
            ],
            [
            "2",
            "Conveniently Buy Airtime. Stay connected effortlessly!",
            "https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"
            ],
            [
            "3",
            "Purchase Float",
            "https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"
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
   "action_id":53,
   "response_status":"00",
   "overall_status":"00",
   "last_response":""
}
```
