# ACCOUNT DETAILS

![ACCOUNT DETAILS](https://i.postimg.cc/BnP8f1Wz/Screenshot-2022-12-19-142135.png)

## Description

This element displays account details of a user.

## Configuration

1. *ACCOUNT* - Set in the datasource payload.

## Data-source payload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["Caroline Maina", "0700100100", "carolinm@gmail.com", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg",  {"p.o box": "1020-30100 Eldoret, KE", "building": "Biashara Mall 3rd Floor", "room": "Room - 12", "town": "Eldoret"}]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "customerName", "label": "Customer Name"},
         {"type": "string", "value": "phoneNumber", "label": "Phone Number"},
         {"type": "string", "value": "email", "label": "Email"},
         {"type": "string", "value": "image", "label": "image"},
         {"type": "object", "value": "shippingAddress", "label": "Shipping Address"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
