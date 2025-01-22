# ORDER TIMELINE

![ORDER RIMELINE](https://i.postimg.cc/nrct8m1k/order-timeline.png)

## Description

Displays order-timeline from time of order to time of delivery  in steps.

## Configuration

1. *STEPS* - These are set in the data-source payload.

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
        ["NikoBizz accepted your order", "Saturday 13/06/2021", "2 days", false],
        ["Your order is ready for pickup", "Monday 15/06/2021", "2 days", false],
        ["Your order was assigned to a courier", "Wednesday 17/06/2021", null, false],
        ["The courier has picked up your order", "Friday 19/06/2021", null, true ],
        ["Out for delivery", "Friday 19/06/2021", null, false ],
        ["Delivered", "Friday 19/06/2021", null, false],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "title", "label": "title"},
         {"type": "string", "value": "subtitle", "label": "subtitle"},
         {"type": "string", "value": "timeTaken", "label": "timeTaken"},
         {"type": "boolean", "value": "isActive", "label": "isActive"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
