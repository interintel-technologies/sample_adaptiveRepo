# LIST ELEMENT

![LIST ELEMENT](https://i.postimg.cc/P5pHvC5z/Screenshot-2023-01-19-103010.png)

## Description

Displays a list of items and a title.

## Configuration

1. *Title* - Comes from Page input Name e.g: "List element.
2. *List Items* - Comes from the datasorce payload.
3. *Index* -  comes form the datasource Payload with row index of the value being 0. Example, "1432" .
4. *Name* - comes from the  datasource Payload with row index of the value being 1. Example, "Nairobi" .
5. *Icon* - comes from the  datasource Payload with row index of the value being 3. The value here can only be of 3 types:

- "increase" : renders a green upward icon to imply increase in value.
- "decrease" : renders a red downward icon to imply decrease in value.
- ""  or null : renders no icon to imply no change in value.

## Functionality

1. None.

### Data-source payload sample

```json
{
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "cols":[
           {
              "label":"index",
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
              "label":"change",
              "type":"string",
              "value":"change"
           }
        ],
        "rows":[
           [
              "1099",
              "Test Group 3",
              "Test Group 3",
              "decrease"
           ],
           [
              "1100",
              "April 2021 EBU team",
              "April 2021 EBU team",
              "increase"
           ],
           [
              "1162",
              "20th MayNew  DSAs", 
              "20th MayNew  DSAs",
              "increase"
           ],
           [
              "1165",
              "Training",
              "Training",
              "decrease"
           ],
           [
              "1166",
              "June New DSAs",
              "June New DSAs",
              ""
           ],
           [
              "1168",
              "Nairobi Contact Group",
              "Nairobi Contact Group",
              "decrease"
           ],
           [
              "1200",
              "Kisumu Contact group",
              "Kisumu Contact group",
              "increase"
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
        "row_count":7
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
