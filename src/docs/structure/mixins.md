
# Mixins
Core reusable functionality such as networking, response parsing, e.t.c are applied into the elements using mixins.  
Mixins are mostly applied to base classes

> [Click to Lean about es6 mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)

## Available Mixins


## httpMixin
making ajax requests

### Properties
```
protocol: String,
hostname: String,
port: Number,
```

### Methods
- call()
  performs a network request and parses the response
  > TODO response parsing
  
  returns a promise that resolves with parsed response or rejection with TODO


- baseUrl 
  returns a base url from location

- send(config)
  Makes an iron-request call based on the config 


this mixin contain a middleware to redirect if redirect in res
> TODO more on redirect trigger from payload



## fileUploadMixin
processing and uploading files

- extends HttpMixin
- reads input files using FileReader,
- verifies the size and matches the required types, 
    > TODO add how to pass the types
- adds appropriate X-file-* headers
    - x-file-name
    - x-file-type
    - x-file-size
- posts to temp file endpoint 
- parses the response, checks the response status
- returns a Promise that resolves with the response
    ```js
      {
        'name':'<file.name>',
        'response':'<response.response>',
        'result':'<reader.onload.e.target.result>' 
      }
    ```



## serviceCallMixin
abstraction over http mixin  
making service calls

### Properties
```
service: String,

```

### Methods
- serviceCallParams
- callService
- callServiceParams
- parserConfig


### ServiceCallParser
parsing of the response status and service command responses
a parser and friendly interface over the response from a switch [service](switch service documentation) call


## dataSourceMixin
abstraction over service call mixin towards the DATASOURCE service    
provides datasource data loading and parsing

### Properties
```
data: {type: Array},
rows: {type: Array},
cols: {type: Array},
groups: {type: Array},
columns: {type: Array},
page: {type: Number},
limit: {type: Number},
totalElements: {type: Number},
totalPages: {type: Number},
q:String,
loading:Boolean,
empty:Boolean

```

### Methods
- dscDataName
- loadData
- onLoadData
- parseResponseIntoProperties *
- dataResponseType
- refresh
- updateParams(key,value)
- deleteParamKeys(keys,forceReload)
- mergeParams(params) 

### Data Source Parser
a parser of the data links, columns and data aggregation
a parser and friendly interface over the response from the [data_source](switch data_source documentation)


## utilsMixin
Element level utilities 
- qs 
- qsa
- toTitleCase


## adaptiveUiMixin
provides binding to the global app context,



## mqttMixin
provides mqtt over websockets
channel subscription, publishing

the mqtt mixins is designed to re-use a single connection and single subscription point for channels,

