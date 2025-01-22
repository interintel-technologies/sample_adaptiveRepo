# TIME SERIES

![time series](https://i.postimg.cc/d7chYsZg/time-series.png "time series")
![multiline time series](https://i.postimg.cc/DWQ8f9q0/multiline-time-series.png "Multiline time series")

## Description

This is a graph that represents data points at successive intervals of time with each point corresponding to a specific quantity and time.

## Configuration

1. *DATA* - The data comes from the data-source payload.
2. *TITLE* - The title should be placed in the  `name`/`page input`  e.g `'Delivered against Date'`
3. *X_AXIS* - The column to plot on the x axis which is identified by the column label in the datasource payload. It is set in the details object as an object with a key of `x_axis`. Example : `"x_axis":"DATE"`. Make sure that the column has date values.
4. *Y_AXIS* - The column to plot on the y axis which is identified by the column label in the datasource payload. It is set in the details object as an object with a key of `y_axis`. Example : `"y_axis":"DELIVERED"`. Make sure that the column has number values.
5. *TICKS* - This is used to control the ticks are displayed by the x-axis. Here you can set the type of time and the interval between the set time of ticks to draw on the x-axis. By default the time is set to `day` and the interval set to `5`. To configure set the preferred ticks in the details object with a key of `ticks` and the value being and object with two key-pair values with their keys being `time` and the other one being `interval`. Example `"ticks":{"time":"hour","interval":"12"}`. Checkout available time below.
6. *TIME_FORMAT* - This is the format in which time in the charts is represented. The Default time format is `28 Jan` which is set as `%d %b`. To configure set the preferred format in the details object with a key of `time_format`. Example `"time_format":"%d-%b-%y"`. Checkout available time formats below.
7. *SECTION_SIZE* - Minimum section size is 8|8|8.
8. *IS_MULTILINE* - This is used if you want to display multiple lines. To archive this male sure that the is a column whose label is `group` in the datasource payload that will be used to group the data. To set the multiline set it in the details object with a key of `isMultiline` and the value being a boolean. E.g `"isMultiline":true`.
9. *FILTERS* - They are set in the datasource column with a key of `filters` and the value being an array of strings. For date filters the key is `date_filters` and the value being a 2 item array with the first item being from date and second item being to date.
10. *HEIGHT* - This is the height of the chart in (`vh`). The default height is `65`. To configure set the preferred height in the details object with a key of `height`. Example `"height":"70"`.

## Functionality

1. When user hovers over the dots, a tooltip appears showing the exact data at that point in the graph.

### Ticks time

The following are the available ticks time you could use in this chart:

1. `second`
2. `minute`
3. `hour`
4. `day`
5. `week`
6. `month`
7. `year`

### Time Formats

The following are the available time formats you could use in this chart. You can also do combinations as you wish. E.g `%d-%b-%y %H:%M %p` which translates to `28-Jan-86 11:39 AM`: For a better understanding visit `https://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95`

1. `%Y-%m-%d` - 1986-01-28
2. `%m/%d/%Y` - 01/28/1986
3. `%H:%M` - 11:39
4. `%H:%M %p` - 11:39 AM
5. `%B %d` - January 28
6. `%d %b` - 28 Jan
7. `%d-%b-%y` - 28-Jan-86
8. `%S s` - 13 s
9. `%M m` - 39 m
10. `%H h` - 11 h
11. `%a` - Tue
12. `%A` - Tuesday
13. `%d d` - 28 d
14. `%b` - Jan
15. `%m/%Y` - 01/1986
16. `%b %Y` - Jan 1986
17. `%B` - January
18. `%c` - Tue Jan 28 11:39:13 1986
19. `%d` - 28
20. `%e` - 28
21. `%H` - 11
22. `%I` - 11
23. `%j` - 028
24. `%m` - 01
25. `%M` - 39
26. `%L` - 000
27. `%p` - AM
28. `%S` - 13
29. `%U` - 04
30. `%w` - 2
31. `%W` - 04
32. `%x` - 01/28/1986
33. `%X` - 11:39:13
34. `%y` - 86
35. `%Z` - +0300

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
            "label":"DATE",
            "type":"datetime",
            "date_filters":[
               "2022-05-17",
               "2022-05-24"
            ]
         },
         {
            "label":"DELIVERED",
            "type":"string",
            "filters": [
               "Car",
               "Train"
            ]
         },
      ],
      "rows":[
         [
            "2020-07-20 13:00:00+00:00",
            "863.0",
         ],
         [
            "2020-07-20 08:30:00+00:00",
            "2938.0",
         ],
         [
            "2020-07-19 05:38:00+00:00",
            "6437.0"
         ],
         [
            "2020-07-14 11:24:00+00:00",
            "3438.0"
         ],
         [
            "2020-07-14 07:08:00+00:00",
            "1794.0"
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

### Multiline Data-source payload

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
               "label":"DATE",
               "type":"datetime",
               "date_filters":[
                  "2022-05-17",
                  "2022-05-24"
               ]
            },
            {
               "label":"DELIVERED",
               "type":"string"
            },
            {
               "label":"OFFLINE",
               "type":"string"
            },
            {
               "label":"group",
               "type":"string"
            },
         ],
         "rows":[
            [
               "2020-07-20 13:00:00+00:00",
               "863.0",
               "100",
               "alpha"
            ],
            [
               "2020-07-20 08:30:00+00:00",
               "2938.0",
               "200",
               "alpha"
            ],
            [
               "2020-07-19 05:38:00+00:00",
               "6437.0",
               "300",
               "alpha"
            ],
            [
               "2020-07-19 05:08:00+00:00",
               "1722.0",
               "400",
               "alpha"
            ],
            [
               "2020-07-18 08:50:00+00:00",
               "4411.0",
               "500",
               "alpha"
            ],
            [
               "2020-07-18 08:36:00+00:00",
               "1338.0",
               "600",
               "alpha"
            ],
            [
               "2020-07-18 07:19:00+00:00",
               "1326.0",
               "700",
               "alpha"
            ],
            [
               "2020-07-17 10:11:00+00:00",
               "896.0",
               "800",
               "alpha"
            ],
            [
               "2020-07-17 07:45:00+00:00",
               "1854.0",
               "900",
               "alpha"
            ],
            [
               "2020-07-17 05:30:00+00:00",
               "2218.0",
               "1000",
               "alpha"
            ],
            [
               "2020-07-15 11:59:00+00:00",
               "2153.0",
               "1100",
               "alpha"
            ],
            [
               "2020-07-15 06:57:00+00:00",
               "2035.0",
               "1200",
               "alpha"
            ],
            [
               "2020-07-15 01:30:00+00:00",
               "9845.0",
               "1300",
               "alpha"
            ],
            [
               "2020-07-14 14:17:00+00:00",
               "4518.0",
               "1400",
               "alpha"
            ],
            [
               "2020-07-14 13:47:00+00:00",
               "1664.0",
               "1500",
               "alpha"
            ],
            [
               "2020-07-14 13:30:00+00:00",
               "1822.0",
               "1600",
               "alpha"
            ],
            [
               "2020-07-14 12:29:00+00:00",
               "104.0",
               "1700",
               "alpha"
            ],
            [
               "2020-07-14 11:24:00+00:00",
               "3438.0",
               "1800",
               "alpha"
            ],
            [
               "2020-07-14 07:08:00+00:00",
               "1794.0",
               "1900",
               "alpha"
            ],[
             "2020-07-20 14:00:00+00:00",
             "843.0",
             "120",
             "beta"
          ],
          [
             "2020-07-20 08:59:00+00:00",
             "2238.0",
             "300",
             "beta"
          ],
          [
             "2020-07-19 06:38:00+00:00",
             "5437.0",
             "150",
             "beta"
          ],
          [
             "2020-07-19 22:08:00+00:00",
             "1222.0",
             "700",
             "beta"
          ],
          [
             "2020-07-18 18:50:00+00:00",
             "3411.0",
             "400",
             "beta"
          ],
          [
             "2020-07-18 08:36:00+00:00",
             "1138.0",
             "900",
             "beta"
          ],
          [
             "2020-07-18 23:19:00+00:00",
             "1426.0",
             "840",
             "beta"
          ],
          [
             "2020-07-17 11:11:00+00:00",
             "800.0",
             "300",
             "beta"
          ],
          [
             "2020-07-17 17:45:00+00:00",
             "1954.0",
             "700",
             "beta"
          ],
          [
             "2020-07-17 07:00:00+00:00",
             "2418.0",
             "1300",
             "beta"
          ],
          [
             "2020-07-15 13:59:00+00:00",
             "2133.0",
             "1400",
             "beta"
          ],
          [
             "2020-07-15 06:57:00+00:00",
             "2135.0",
             "1400",
             "beta"
          ],
          [
             "2020-07-15 04:34:00+00:00",
             "9845.0",
             "1600",
             "beta"
          ],
          [
             "2020-07-14 17:10:00+00:00",
             "4818.0",
             "1450",
             "beta"
          ],
          [
             "2020-07-14 10:47:00+00:00",
             "1464.0",
             "1200",
             "beta"
          ],
          [
             "2020-07-14 12:30:00+00:00",
             "1322.0",
             "1800",
             "beta"
          ],
          [
             "2020-07-14 09:59:00+00:00",
             "1454.0",
             "1600",
             "beta"
          ],
          [
             "2020-07-14 12:24:00+00:00",
             "1438.0",
             "1800",
             "beta"
          ],
          [
             "2020-07-14 21:08:00+00:00",
             "1794.0",
             "1600",
             "beta"
          ],[
             "2020-07-20 17:20:00+00:00",
             "743.0",
             "180",
             "charlie"
          ],
          [
             "2020-07-20 19:29:00+00:00",
             "2238.0",
             "460",
             "charlie"
          ],
          [
             "2020-07-19 20:38:00+00:00",
             "1537.0",
             "250",
             "charlie"
          ],
          [
             "2020-07-19 03:08:00+00:00",
             "1442.0",
             "670",
             "charlie"
          ],
          [
             "2020-07-18 11:34:00+00:00",
             "3711.0",
             "400",
             "charlie"
          ],
          [
             "2020-07-18 15:36:00+00:00",
             "1338.0",
             "680",
             "charlie"
          ],
          [
             "2020-07-18 14:19:00+00:00",
             "826.0",
             "640",
             "charlie"
          ],
          [
             "2020-07-17 22:51:00+00:00",
             "1030.0",
             "270",
             "charlie"
          ],
          [
             "2020-07-17 09:35:00+00:00",
             "1234.0",
             "1000",
             "charlie"
          ],
          [
             "2020-07-17 07:50:00+00:00",
             "1418.0",
             "1130",
             "charlie"
          ],
          [
             "2020-07-15 11:29:00+00:00",
             "2423.0",
             "1100",
             "charlie"
          ],
          [
             "2020-07-15 16:57:00+00:00",
             "895.0",
             "1110",
             "charlie"
          ],
          [
             "2020-07-15 04:20:00+00:00",
             "7245.0",
             "1130",
             "charlie"
          ],
          [
             "2020-07-14 13:10:00+00:00",
             "3318.0",
             "350",
             "charlie"
          ],
          [
             "2020-07-14 13:47:00+00:00",
             "1864.0",
             "1000",
             "charlie"
          ],
          [
             "2020-07-14 17:40:00+00:00",
             "2122.0",
             "1290",
             "charlie"
          ],
          [
             "2020-07-14 11:59:00+00:00",
             "3454.0",
             "1200",
             "charlie"
          ],
          [
             "2020-07-14 03:24:00+00:00",
             "988.0",
             "1130",
             "charlie"
          ],
          [
             "2020-07-14 10:08:00+00:00",
             "1394.0",
             "1130",
             "charlie"
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
         "row_count":0
      }
   },
   "action_id":53,
   "response_status":"00",
   "overall_status":"00",
   "last_response":""
 }
```
