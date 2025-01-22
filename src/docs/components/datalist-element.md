# DATALIST ELEMENT

## Description
view and paging of data from DATA SOURCE in a table


## Configuration
- datasource dataname defaultValue

- list style type
`details['type'] = 'card' | 'table'`   
the type will be converted to Lowercase before comparison so any case would work

- list item column values to be formatted as download links  
`details['download_links'] = ['property1','property2']`

- Pagination options  
`details['page_limits']: [50, 100, 500]`  
if not specified, the listing default to 50 items per page with no options

- Selectable List items  
`details['selectable'] = true`     
> TODO should be an object to allow for more configurations

- Export
```js
    details['export'] = {
    "csv":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].csv"},
    "pdf":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].pdf"}
    }
```
> **Note** The formatting [tokens](https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md) are from date-fns library (same as datasource parser and date and time elements)

- Row Actions
> TODO Link to Switch Link query configuration

- pre-selection, values passed in kind
- required, set min>0 or required to True, must also be selectable `details['selectable'] = true` 


- EmptyMessage
`details['empty_message'] = 'Empty message to show user'` 
Used for the empty view elemnt to display a message to the user that there is no data available

- Gateway
`details['gateway'] = 'nenasasa'` 
Used to determine the color of the image the value can be:
`'mipay'`
`'nenasasa'`


## Structure
**SerializableElement**

### Mixins 
- DataSourceMixin
- UtilsMixin

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
>TODO complete

### Functionality
1.	When required=False and selectable, can submit null
2.	When required=True and selectable, must have a selection or be invalid
