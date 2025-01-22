# MSISDN INPUT

## Description
Phone number input field
The country codes are loaded from the **DATASOURCE**

## Configuration
- datasource dataname defaultValue should be *MSISDN*, 
>TODO link to switch dsc MSISDN function
- A value when in edit mode passed in kind
- required, set min>0 or required to True

## Structure
**SerializableElement**
### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The country codes are loaded via **DATASOURCE**

### Functionality
1.	It should have a select for the country code
2.	It should provide an input field for the number without the code
3.	When required=True, there has to be a value
4.	When required=False, should n
5.  if kind is not null, set the starting value
