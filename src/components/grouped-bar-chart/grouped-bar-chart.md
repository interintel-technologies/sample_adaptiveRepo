# GROUPED BAR CHART

![Grouped bar chart](https://i.postimg.cc/0Nm69QVZ/Screenshot-2022-02-24-134232.png "Grouped Bar Chart")

## Description

This is a graph that represents grouped data.

## Configuration

1. *DATA* - The data comes from the data-source payload.
2. *TITLE* - The title should be placed in the  `name`/`page input`  e.g `WRC RALLY CHAMPIONSHIP MANUFACTURER POINTS CHART`.
3. *COLUMNS_TO_PLOT* - The labels of the columns you wish to plot from the DataSource payload. It should be placed in the details Object as an array with a key of `columns_to_plot` e.g `"columns_to_plot":["Safari", "Greece", "Monte Carlo"]`.
4. *X_AXIS_LABEL* - The name to represent values on the x axis. It is set in the details object as an object with a key of `x_axisLabel`. Example : `"x_axisLabel":"Stages"`.
5. *Y_AXIS_LABEL* - The name to represent values on the y axis. It is set in the details object as an object with a key of `y_axisLabel`. Example : `"y_axisLabel":"Points"`.
6. *GROUPS* - Groups are set in the datasource payload with the column label being groups.
7. *SECTION_SIZE* - Minimum section size is 8|8|8.
8. *FILTERS* - This filters are used to change the data fed to the chart that can be chosen using a select element at the top right. Each filter has a key that specifies the time of filter e.g `year` or `month` and the value is an array of options which will be seen in the select dropdown. The filters are set in the details object with a key of `filters` and the value being an object. E.g `"filters": {"year": ["2021", "2022", "2020", "2019"]}` Note, you can have more than one filter by just adding another key-value pair to the filters object;
9. *TIME_FORMAT* - This is the format in which time in the charts is represented. The Default time format is `28 Jan` which is set as `%d %b`. To configure set the preferred format in the details object with a key of `time_format`. Example `"time_format":"%d-%b-%y"`. Checkout available [time formats](#time-formats).
10. *HEIGHT* - This is the height of the chart in (`vh`). The default height is `65`. To configure set the preferred height in the details object with a key of `height`. Example `"height":"70"`.

### Using Data with time

To use data whose type is `datetime`, then set the date filters in the column whose label is `groups`. [Here](#datetime-datasource-payload-sample) is a sample datasource payload.

### Functionality

1. When user hovers over the dots, a tooltip appears showing the exact data at that point in the graph.

### Time Formats

The following are the available time formats you could use in this chart. You can also do combinations as you wish. E.g `%d-%b-%y %H:%M %p` which translates to `28-Jan-86 11:39 AM`: For a better understanding visit [here](https://d3-wiki.readthedocs.io/zh_CN/master/Time-Formatting/)

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
              "label":"Safari",
              "type":"string"
           },
           {
              "label":"Sweden",
              "type":"string"
           },
           {
              "label":"Monte Carlo",
              "type":"string"
           },
           {
              "label":"Greece",
              "type":"string"
           },
          {
            "label":"group",
            "type":"string"
          }
        ],
        "rows":[
           [
              "80.0",
              "72.0",
              "98.0",
              "57.0",
              "Toyota"
           ],
           [
              "28.0",
              "18.0",
              "44.0",
              "50.0",
              "Citroën"
           ],
           [
              "64.0",
              "78.0",
              "44.0",
              "35.0",
              "Ford"
           ],
           [
              "17.0",
              "20.0",
              "47.0",
              "50.0",
              "Nissan"
           ],
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

### Datetime Datasource payload sample

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
               "label":"Safari",
               "value":"Safari",
               "type":"string"
            },
            {
               "label":"Sweden",
               "value":"Sweden",
               "type":"string"
            },
            {
               "label":"Monte Carlo",
               "value":"Monte Carlo",
               "type":"string"
            },
            {
               "label":"Greece",
               "value":"Greece",
               "type":"string"
            },
            {
               "label":"group",
               "value":"r_date",
               "type": "datetime",
               "date_filters":[
                "2022-05-17",
                "2022-05-24"
              ]
            }
        ],
        "rows":[
           [
              "80.0",
              "72.0",
              "98.0",
              "57.0",
              "2020-07-20 13:00:00+00:00"
           ],
           [
              "28.0",
              "18.0",
              "44.0",
              "50.0",
              "2020-07-20 08:30:00+00:00"
           ],
           [
              "64.0",
              "78.0",
              "44.0",
              "35.0",
              "2020-07-19 05:38:00+00:00"
           ],
           [
              "17.0",
              "20.0",
              "47.0",
              "50.0",
              "2020-07-14 07:08:00+00:00"
           ],
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
