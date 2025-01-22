# EVENTS LIST

![EVENTS LIST](https://i.postimg.cc/jdtS3grt/Screenshot-2023-01-12-182251.png)

## Description

This element is used to show a list of events that can be selected using checkboxes and actions set on the checked events .

## Configuration

1. *TITLE* - The title should be placed in the name/page input e.g `My Events`.
2. *ACTIONS* - The actions to be taken on checked events are set in the details object with a key of `actions` with a value being an array of strings. E.g `"actions": ["Mark as complete", "View Booking info", "Reschedule", "Cancel & Refund"]`
3. *EVENTS* - The events are set in the data-source payload.

## Functionality

1. When an action is clicked, the checked event id and the specified events are passed to implement the action.

### Data-source payload sample

``` json
{
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "cols":[
            {
              "label":"id",
              "type":"string",
              "value":"time"
            },
           {
              "label":"time",
              "type":"object",
              "value":"time"
           },
           {
              "label":"label",
              "type":"string",
              "value":"label"
           },
           {
              "label":"action",
              "type":"string",
              "value":"action"
           }
        ],
        "rows":[
           [
            "1",
              {
                 "from":1638622447680,
                 "to":1638622447680
              },
              "Customize messages",
              "mpesa"
           ],
           [
             "2",
              {
                 "from":1638439899572,
                 "to":1638439899572
              },
              "Reach contact groups",
              "mpesa"
           ],
           [
             "3",
              {
                 "from":1638439899572,
                 "to":1638439899572
              },
              "Purchase Float",
              "mpesa"
           ],
           [
             "4",
              {
                 "from":1638536047680,
                 "to":1638536047680
              },
              "Short Code Request",
              "mpesa"
           ],
           [
             "5",
              {
                 "from":1638536047680,
                 "to":1638536047680
              },
              "Customize messages",
              "mpesa"
           ],
           [
             "6",
              {
                 "from":1638536047680,
                 "to":1638536047680
              },
              "Reach contact groups",
              "mpesa"
           ],
           [
             "7",
              {
                 "from":1638536047680,
                 "to":1638536047680
              },
              "Purchase Float",
              "mpesa"
           ],
           [
             "8",
              {
                 "from":1638536047680,
                 "to":1638536047680
              },
              "Short Code Request",
              "mpesa"
           ],
           [
             "9",
              {
                 "from":1638622447680,
                 "to":1638622447680
              },
              "Customize messages",
              "mpesa"
           ],
           [
             "10",
              {
                 "from":1638622447680,
                 "to":1638622447680
              },
              "Reach contact groups",
              "mpesa"
           ],
           [
             "11",
              {
                 "from":1638622447680,
                 "to":1638622447680
              },
              "Purchase Float",
              "mpesa"
           ],
           [
             "12",
              {
                 "from":1638622447680,
                 "to":1638622447680
              },
              "Short Code Request",
              "mpesa"
           ]
        ],
        "lines":[
        ],
        "groups":[
        ],
        "data":[
        ],
        "min_id":0,
        "max_id":0,
        "row_count":4
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
