# WEEK ANALYSIS

![WEEK ANALYSIS](https://i.postimg.cc/25S6FhsZ/Screenshot-2022-03-28-162005.png)

## Description

This element is used to show data both for a day to day summary of an entire week using candles, and a summary which appears on the far right.

## Configuration

1. *TITLE* - The title should be placed in the  `name`/`page input`  e.g `"Analytics"`
2. *SEE ALL LINK* - The link that will redirect once the see all button is clicked contained in the details object with a key of `seeAllLink` and its value a string e.g `seeAllLink: url`.
3. *WEEK ANALYSIS* - The data for the day candles configured in the data-source payload rows & cols.
4. *WEEK SUMMARY* - The data for the content on the right side of the element configured in the data-source payload lines.

## Functionality

1. None

### Data-source Payload Sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
          [200,100,40],
          [200,80,40],
          [120,100,40],
          [200,100,40],
          [90,100,40],
          [200,100,70],
          [0,0,0],
        ],
       "data": [],
       "groups": [],
       "cols": [
         {"type": "number", "value": "string", "label": "Appointments"},
         {"type": "number", "value": "string", "label": "Cancelled"},
         {"type": "number", "value": "string", "label": "Upcomming"},
       ],
       "row_count": 6,
       "min_id": 0,
       "lines": [{
          "Clients":105,
          ["New Client"]: 11,
          "Guests": 105
       }],
       "max_id": 0},
   },
   "last_response": "",
 }
```
