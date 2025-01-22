# TOP SELLING ITEMS

![TOP SELLING ITEMS](https://i.postimg.cc/wxfHKD1t/top-sell.png)

## Description

This element displays the top 4 items of any category. Each item has an image, a name, and a count. The element also has filters that allows a user to pick top items depending on the filters provided.

## Configuration

1. *NAME* - The name should be placed in the  `name`/`page input`  e.g `Top Selling Items`
2. *ITEMS* - The items are set in the data-source payload.
3. *FILTERS* - These are set in the details object with a key of `filters` and the value being an object. E.g `{"filters": {"year": ["2021", "2022", "2020", "2019"], "month": ["January", "Febuary", "March", "April"]}}`.

### Functionality

1. Picking a filter updates the data-source payload with new data.
2. Clicking on an item triggers a service that will show the full details of the item

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
         ["yorghut", 200, "https://553389-1778445-1-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/9e3cf196ef3e197bbe0fe725464814be/5/9/5906.jpeg", 30],
         ["yorghut", 200, "https://553389-1778445-1-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/9e3cf196ef3e197bbe0fe725464814be/5/9/5906.jpeg", 30],
         ["yorghut", 200, "https://553389-1778445-1-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/9e3cf196ef3e197bbe0fe725464814be/5/9/5906.jpeg", 30],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "name", "label": "name"},
         {"type": "number", "value": "price", "label": "price"},
         {"type": "string", "value": "image", "label": "image"},
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
