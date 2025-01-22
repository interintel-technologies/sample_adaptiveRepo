# DATALIST ELEMENT:TABLE2 TYPE

![Table2 Type](https://i.postimg.cc/brNcRFC1/dsv2-0new-datalist-element.png)

## Description

view and paging of data from DATA SOURCE in a table

## Configuration

1. datasource dataname defaultValue

2. list style type
`"type":"table2"`
the type will be converted to Lowercase before comparison so any case would work

3. list item column values to be formatted as download links  
`"download_links":["property1","property2"]`

4. Pagination options  
`"page_limits": [50, 100, 500]`  
if not specified, the listing default to 50 items per page with no options

5. Auto reload
`"reload"] = true`  
used to refresh the default dsc call for the datalist element. Set to interval to a default of 10000 miliseconds

6. Auto reload_time
`"reload_time":5000`
time used to set the interval function used to refresh the default dsc call for the datalist element. If not specified and **reload** is set to true then interval will default of 10000 miliseconds 

7. Selectable List items  
`"selectable":true`

8. alert  
`"alert":true`
used in product-list to identify if a product reaches a low stock


9. Export
```js
    details['export'] = {
    "csv":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].csv"},
    "pdf":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].pdf"}
    }
```
> **Note** The formatting [tokens](https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md) are from date-fns library (same as datasource parser and date and time elements)

10. Row Actions
> TODO Link to Switch Link query configuration

- pre-selection, values passed in kind
- required, set min>0 or required to True, must also be selectable `"selectable":true` 


11. EmptyMessage
`"empty_message":"Empty message to show user"` 
Used for the empty view element to display a message to the user that there is no data available

12. Gateway
`"gateway":"nenasasa"` 
Used to determine the color of the image the value can be:
`'mipay'`
`'nenasasa'`
 13. State
 Set in the details object that give values a color determined by the column of value, and the actual value itself in order to determine the color to set on the value. Color can also be hex code
 `"state": { "status": { "New": "#209cee", "Failed": "#ff3860" ,"Success":"#00d1b2","Pending":"#ffdd57"}}`


## Structure
**SerializableElement**

### Mixins 
- DataSourceMixin
- ThemeMixin

### Core
The list items are loaded via **DATASOURCE**

- Datasource Dataname
self.params['data_name'] 
> TODO more in datasource mixin

- Pagination 
self.params['limit'] = self.pageSize; Specifying limit of data to return // default is 50  
self.params['page'] = self.page;  e.g 1,2,3,4  
self.params['q'] = self.q;  Column search filtering  

- Columns Ordering
self.params['order_by']

- Column dropdown filtering
-dropdown oprtions list is gotten from the columns in the datasource


### Details
`{"page_limits": [10, 20, 40],"download_links":["property1","property2"],"type":"table2","selectable":"true"}`

### Functionality
1.	When required=False and selectable, can submit null
2.	When required=True and selectable, must have a selection or be invalid

### Datasource payload sample

```json
    {
 "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["1", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg","Ecommerce" ,"1200","25","May 21,2022","New"],
        ["2", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg","Ecommerce2","1200","25","May 21,2022","Failed"],
        ["3", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg","Ecommerce3","1200","25","May 21,2022","Success"],
        ["4", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg","Ecommerce4","1200","25","May 21,2022","Pending"],
      
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "customerName", "label": "id"},
        {"type": "string", "value": "image", "label": "image"},
        {"type": "string", "value": "title", "label": "title"},
        {"type": "number", "value": "price", "label": "price"},
        {"type": "number", "value": "quantity", "label": "quantity"},
        {"type": "string", "value": "created", "label": "created"},
        {"type": "string", "value": "status", "label": "status"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
    }
```
