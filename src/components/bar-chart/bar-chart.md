# BAR CHART

![bar chart](https://i.postimg.cc/0M8rzVff/bar-chart.png "Bar Chart")

## Description

This is a graph that represents data points as bars on a chart.

## Configuration

1. *DATA* - The data comes from the datasource payload.
2. *TITLE* - The title should be placed in the  `name`/`page input`  e.g `Delevered against Date`.
3. *X_AXIS* - The column to plot on the x axis which is identified by the column label in the datasource payload. It is set in the details object as an object with a key of `x_axis`. Example : `"x_axis":"OFFLINE"`.
4. *Y_AXIS* - The column to plot on the y axis which is identified by the column label in the datasource payload. It is set in the details object as an object with a key of `y_axis`. Example : `"y_axis":"DELIVERED"`. Make sure that the column has number values.
5. *USE_CASE* - This is used for special cases when for instance using time data on the x axis. If ignored, the bar chart will render normally. It should be placed in the details Object as an object with a key of `use_case` e.g `"use_case":"time"`. For this, make sure that the x_axis have values that are dates.
6. *SECTION_SIZE* - Minimum section size is 8|8|8.
7. *FILTERS* - This filters are used to change the data fed to the chart that can be chosen using a select element at the top right. Each filter has a key that specifies the time of filter e.g `year` or `month` and the value is an array of options which will be seen in the select dropdown. The filters are set in the details object with a key of `filters` and the value being an object. E.g `"filters": {"year": ["2021", "2022", "2020", "2019"]}` Note, you can have more than one filter by just adding another key-value pair to the filters object;
8. *HEIGHT* - This is the height of the chart in (`vh`). The default height is `65`. To configure set the preferred height in the details object with a key of `height`. Example `"height":"70"`.

### Functionality

1. When user hovers over the dots, a tooltip appears showing the exact data at that point in the graph.

### Data-source payload sample

```json
{
  "response_status":"00",
  "overall_status":"00",
  "action_id":53,
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "cols":[
           {
              "label":"DELIVERED",
              "type":"string",
              "filters": [
                  "Safari",
                  "Monte",
                  "Finland"
              ]
           },
           {
              "label":"OFFLINE",
              "type":"string"
           }
        ],
        "rows":[
           [
              "863.0",
              "12.0",
           ],
           [
              "2938.0",
              "188.0",
           ],
           [
              "6437.0",
              "782.0"
           ],
           [
              "1722.0",
              "206.0"
           ],
           [
              "2153.0",
              "245.0"
           ],
           [
              "1664.0",
              "80.0"
           ],
           [
              "1822.0",
              "248.0"
           ],
           [
              "104.0",
              "7.0"
           ],
           [
              "3438.0",
              "264.0"
           ],
           [
              "1794.0",
              "82.0"
           ]
        ],
        "lines":[],
        "groups":[],
        "data":[],
        "min_id":0,
        "max_id":0,
        "row_count":0
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
