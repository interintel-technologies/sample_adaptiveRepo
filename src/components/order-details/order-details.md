# ORDERS DETAILS

![ORDERS DETAILS](https://i.postimg.cc/pLM21Ytn/order-details.png)

## Description

This element displays the details of an order.

## Configuration

1. *ORDER* - Set in the data-source payload.

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
         ["9034215", "Tudor Black Strap Watch", "https://m.media-amazon.com/images/I/81nj6IlZpVL._UY445_.jpg", Date.now(), "PROCESSED - ITEM LEFT FOR DELIVERY", "Premium (3 days delivery)", null, 1]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "productId", "label": "productId"},
         {"type": "string", "value": "productName", "label": "productName"},
         {"type": "string", "value": "productName", "label": "productImage"},
         {"type": "number", "value": "orderDate", "label": "orderDate"},
         {"type": "number", "value": "orderStatus", "label": "orderStatus"},
         {"type": "string", "value": "orderType", "label": "orderType"},
         {"type": "string", "value": "meansUsed", "label": "meansUsed"},
         {"type": "number", "value": "quantity", "label": "quantity"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
