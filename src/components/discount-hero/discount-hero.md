# DISCOUNT HERO

![DISCOUNT HERO](https://i.postimg.cc/6QtHhYbs/Screenshot-2022-09-06-140544.png)

## Description

This element displays discount details including an image, text and a button that redirects to the discounted products.

## Configuration

1. *DISCOUNT* - Set in the data-source payload row's section.

NB. To make a section of the text's color being the secondary color, wrap that section between the `<strong></strong>` tag. E.g `Hurry! Get <strong>30% off</strong> on all your home decor!`

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
         ["Hurry! Get <strong>30% off</strong> on all your home decor!", "Shop Decor", "ddddd", "https://rosiofficefurniture.com/wp-content/uploads/2021/05/furniture-1.jpg"]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "text", "label": "text"},
         {"type": "string", "value": "buttonLabel", "label": "buttonLabel"},
         {"type": "string", "value": "buttonLink", "label": "buttonLink"},
         {"type": "number", "value": "image", "label": "image"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
