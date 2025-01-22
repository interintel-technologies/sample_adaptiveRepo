# DROPDOWN SELECT

## Description
Provide a dropdown of selectable menu items.  
The list items are loaded from the **DATASOURCE**

## Configuration
- datasource dataname defaultValue, 
- the required datasource response structure is LIST
- pre-selection, value passed in kind
- required, set min>0 or required to True

## Structure
**SerializableElement**
### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE** call and concatenate to string.    
The list items after the [index/id] are the label displayed  
First item is the value on selection

### Functionality
1.	When required=False, should not autoselect a value
2.	When required=True, autoselect the first item
3.  if kind is not null,it's a value, ignore above and pre-select
4.  columns in `concat_exclude` in `details` should be ignored


