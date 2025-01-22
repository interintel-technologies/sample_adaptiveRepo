

# ADS CAROUSEL

![Ads Carousel](https://i.postimg.cc/pLdhm6F0/image.png)

## Description

This element that displays multiple ads in a carousel that auto plays and has nav buttons.

## Configuration

1. *ads* - set in the datasource
2. *autoPlayInterval* - Set in the details object with a key value object. Time set is in milliseconds with the default time being `10000` seconds. To change this, set the interval in the details object with a key of `autoPlayInterval` eg.`"autoPlayInterval": 9000`

## DataSource payload

```json
{
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "cols":[
           {
              "label":"id",
              "type":"string",
              "value":"id"
           },
           {
              "label":"name",
              "type":"string",
              "value":"name"
           },
           {
              "label":"description",
              "type":"string",
              "value":"description"
           },
           {
              "label":"image",
              "type":"string",
              "value":"image"
           }
        ],
        "rows":[
           [
              "172",
              "Deposint and withdraw, Buy airtime, Request Payents|Simple, Reliable, Secure",
              "https://nenasasa.com/media/dsc_imagelist_image/SP_5.png"
           ],
            [
              "173",
              "Deposint and withdraw, Buy airtime, Request Payents|Simple, Reliable, Secure",
              "https://nenasasa.com/media/dsc_imagelist_image/SP_5.png"
           ],
        ],
        "lines":[
        ],
        "groups":[
        ],
        "data":[
        ],
        "min_id":0,
        "max_id":0,
        "row_count":11
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}

```

```

```

```

```
