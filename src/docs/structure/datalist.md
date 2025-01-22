# Data listing structure

## Base structure
The datalist element functionality is mainly controlled through request params or element details

the datalist element applies the [datasourceMixin](/structure/mixins/#datasourcemixin) which provides the data loading
functionality

the mixin also does parsing of the data request response into [DataSource]()


## Features  
### List types

  rendering of various types of list
  the various types are mainly differentiated by the UI/UX
  e.g 
  * a list type x that displays items as cards, 
  * a list type y that displays items in a table,
  * a list type z that displays items with avatars 
  
  the list type is identified by a name, the name is specified in element details
  ```js
  details['type'] = 'card';
  details['type'] = 'table';
  
  ```
  the datalist element defaults to rendering a table if the specified list type doesn't exist i.e on a theme  
  thus a theme must have configured a minimum of the `table` list type

### Pagination  
  
  paging through list items,
  
  when there are lots of items, the datalist display a slice of the items and adds pagination links
  to allow for navigation through the next or previous page of items 
  
  > TODO move into switch docs
  
  the datalist service 
  
  > custom pagination options
  > how pagination links are generated
  > how to make a paged request
  > 

### Ordering
  
  ordering of the response data
  
  the response data can be ordered by a column, 
  e.g * display latest created item first
  
  > design spec

### Search and Filtering
  
  Allowing for Searching through the data
  
  the datalist supports this methods of searching through the data
  
  1. General Search - Search through all columns
  2. Column Search - Searching through only a specific column
  
  If the column contains only a predefined set of options, 
  the user is allowed to search using only the options 
  e.g a list of Orders might have column status PAID, UNPAID, 
    a user should only be able to filter in the column using PAID, UNPAID and not SETTLED
  
  the column options are usually best listed in a dropdown


### Actions
  Actions from Rows. 
  
  The datalist items might have links for performing various actions or navigating to other pages
  e.g * a link for performing a delete action
      * a link for viewing more details
  
  the links very depending on the row
  
  > design spec
  - don't display links toggle if no actions exist 
  - link icons


### Export
  
  Data Export 
  
  the datalist supports exporting of data to csv and pdf
  the export is generated on the client side from the data displayed 
  
  > export format
  
   
  

### Data Formatting
- formatting of json values
- formatting of boolean  
- list item column values to be formatted as download links  


### Selection
  Selection of List Items for Submission
  
  - pre-selection, values passed in kind


# Data Loading and Control

datalist-element applies this mixin in the base class

the search happens by updating the DATASOURCE request params,
what you see on the console are the params.

the datasourceMixin provides an easier way of updating the params 
and initiating a load of data


it does so by providing these methods
1. .updateParams(key,value)
2. .deleteParamKeys(keys,forceReload)
3. .mergeParams(params) 

So this is what happens for bulkit

1. when you click submit, a custom event named search is dispatched from
DataSourceList._search

the dispatched custom event details will contain the search query and the column to search


2. in datalist element, renderDefault, there is a listener for this event, 
it's DataListElement._handleSearch

this will remove all previous set search params `deleteParamKeys`

then set the new params from the event `updateParams`

3. Just calling update params with trigger a network request to load the data with the new params
 

so the loading happens in the datalist-element and the triggering happens through events
