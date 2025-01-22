# FAQ ELEMENT

![FAQ ELEMENT](https://i.postimg.cc/RhzhPMqH/Screenshot-2022-07-04-123609.png)

## Description

This element shows frequently asked questions rendering only those that are from the category selected from tabs at the top pf the element. Each  frequently asked question has some buttons to provide feedback on whether it was helpful and a counter to show how many people thought it was helpful.

## Configuration

1. *TITLE* - The title should be placed in the name/page input e.g `Frequently Asked Questions`
2. *FAQS* - The Frequently Asked Question come from the datasource payload.

## Functionality

1. When you click on either thumb button at the bottom of each FAQ sends back the id and choice(true for thumbs up and false for thumbs down)

## Data Source payload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["89", "Test Group 1", "Test Group 1|Esse occaecat tempor ea nulla reprehenderit. <li style='list-style: disc;'>0ne</li> <li style='list-style: disc;'>0nde</li>",],
         ["90", "Test Group 1", "Test Group 2|Esse occaecat tempor ea nulla reprehenderit."],
         ["91", "Test Group 1", "Test Group 3|Esse occaecat tempor ea nulla reprehenderit."],
         ["98", "guru_june", "guru_june|Esse occaecat tempor ea nulla reprehenderit."],
         ["99", "guru_june", "ushindi_june|Esse occaecat tempor ea nulla reprehenderit."],
         ["100", "all_latest", "all_latest|Esse occaecat tempor ea nulla reprehenderit."],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "index"},
         {"type": "string", "value": "category", "label": "category"},
         {"type": "string", "value": "questionAnswer", "label": "questionAnswer"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
}
```
