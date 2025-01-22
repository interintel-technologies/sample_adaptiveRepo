#TAG INPUT

## Description
tag picker and submit, multi-selection of options

## Configuration
- datasource dataname defaultValue, 
- the required datasource response structure must have id and name columns for LIST and keys for DATA
    `id` will the submitted value on selection and `name` will be the displayed label
- pre-selection, values passed in kind, comma separated
- required, set min>0 or required to True

## Structure
**SerializableElement**

#### getValue
returns the current selected tags joined by comma

### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE** 

### Functionality
1.	When required=False, a tag selection is optional
2.	When required=True, a tag selection is require
3.  if kind is not null,it's a list of id's to preselect (edit-mode)
