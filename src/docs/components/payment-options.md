# PAYMENT OPTIONS

## Description
a listing of various payment options available 
the options are loaded from datasource as a LIST

## Configuration
- a datasource query should be configured 
> TODO expected query structure 
expects a list of items from crm PaymentOptions 

## Structure
**SerializableElement**

### Mixins 
- UtilsMixin
- DataSourceMixin

### Core
the options are grouped by the method from the LIST

### Functionality 
1. returns the id of the selected option as the form value
