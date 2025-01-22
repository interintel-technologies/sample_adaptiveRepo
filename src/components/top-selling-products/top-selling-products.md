# TOP SELLING PRODUCTS

![Top Selling Products](https://i.postimg.cc/VvvX726L/topsellprod.png)

## Description

This element displays a list of top selling products each with a name, image, availability and total. Each item has an availability column that shows informs users on stock based o the set warning level.

## Configuration

1. *NAME* - The name of the element is contained in `page input name` eg `"Select how you"d want to add your products"`.
2. *PRODUCTS* - This is set in the data-source payload.
3. *WARNING_LEVEL* - This is a level that is a number that is used to show that the availability of an item is low. By default the warning level is 10. This is set in the details object with a key of `warningLevel` and the value being a number. E.g `{"warningLevel": 20}`
4. *FILTERS* - These are set in the details object with a key of `filters` and the value being an object. E.g `{"filters": {"year": ["2021", "2022", "2020", "2019"], "month": ["January", "Febuary", "March", "April"]}}`.

## Data-source payload sample

```json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["Apple Macbook Air", "https://www.lifewire.com/thmb/QCpEEklR_taMUQ7ScrJMB3s-Gho=/1333x1000/smart/filters:no_upscale()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg", 320, 120000],
         ["Apple Macbook Air", "https://www.lifewire.com/thmb/QCpEEklR_taMUQ7ScrJMB3s-Gho=/1333x1000/smart/filters:no_upscale()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg", 0, 120000],
         ["Apple Macbook Air", "https://www.lifewire.com/thmb/QCpEEklR_taMUQ7ScrJMB3s-Gho=/1333x1000/smart/filters:no_upscale()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg", 3, 120000],
         ["Apple Macbook Air", "https://www.lifewire.com/thmb/QCpEEklR_taMUQ7ScrJMB3s-Gho=/1333x1000/smart/filters:no_upscale()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg", 10, 120000]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "name", "label": "name"},
         {"type": "string", "value": "image", "label": "image"},
         {"type": "number", "value": "availability", "label": "availability"},
         {"type": "string", "value": "total", "label": "total"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
