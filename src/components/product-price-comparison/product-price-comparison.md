# PRODUCT PRICE COMPARISON

![Product Price Comparison](https://i.postimg.cc/y8RXq0SH/Screenshot-2022-03-16-133329.png)

## Description

This element displays a product with a list of vendors that sell the same product.

## Configuration

1. *PRODUCT* - This is set in the data-source payload.

## Data-source payyload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [["1", "Classic Wooden-Legged chair", "https://content.la-z-boy.com/Images/product/category/white/large/235401.jpg", [
         {
          "id":"1",
          "name":"Vendor A",
          "price": 3500,
          "isInStock": true,
          "icon": "apps"
         },{
          "id":"2",
          "name":"Vendor B",
          "price": 3500,
          "isInStock": true,
          "icon": "apps"
         },{
          "id":"1",
          "name":"Vendor C",
          "price": 3800,
          "isInStock": false,
          "icon": "apps"
         },{
          "id":"1",
          "name":"Vendor D",
          "price": 3550,
          "isInStock": true,
          "icon": "apps"
         }
       ]]],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "image", "label": "image"},
         {"type": "array", "value": "vendors", "label": "vendors"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
