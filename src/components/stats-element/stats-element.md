# STATS ELEMENT

![Stats Element](https://i.postimg.cc/N0BFS8km/stats-element.png)

## Description

This element displays stats on an attribute on a card each that have an icon, name, value, and a description.

## Configuration

1. *title* - The title should be placed in the  `name`/`page input`  e.g `'Delivered against Date'``
2. *icon* - The icon appears at the top center of the element and is contained in the data-source payload  with its column label being `icon`.
3. *name* - This is the text that appears beneath the icon that becomes the label of the stat. It's contained in the data-source payload with its column label being `name`.
4. *value* - This is the numeric value of the stat and is contained in the data-source payload with its column label being `value`.
5. *description* - This is text appears at the bottom of the card that is used to add more context to the stat and is contained in the data-source payload with its column label being `description`.

### Functionality

1. None.

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
         ["bug-report", "Orders", "4", "description"],
         ["pets", "Points", "1", "description"],
         ["polymer", "Wishlist", "12", "description"],
         ["shop", "Saved Items", "5", "description"],
        ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "icon", "label": "icon"},
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "value", "label": "value"},
         {"type": "string", "value": "description", "label": "description"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
