# SECTION SERVICE 2

## Description
For viewing label,title and description


## Configuration
- datasource dataname defaultValue


## Structure
**SectionPElementDsc**

### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE**

- Datasource Dataname
self.params['data_name'] 
 
-Title
Gotten from `name` column in the dsc eg. `InterIntel,`
 
 -Description
 Gotten from `description` column in the dsc.

### Functionality
1. N/A
