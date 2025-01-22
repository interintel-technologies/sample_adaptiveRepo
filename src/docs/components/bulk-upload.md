# BULK UPLOAD

## Description
multiple images picker

## Configuration
- required, set min>0 or required to True

## Structure
**SerializableElement**
### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
On file selection, upload to the endpoint. /upload-temp-file then save the response
for submit

get value returns an array of the uploaded files
```js
    [{"name":"<file_name>","response":"<temp file response>"}, ... ]
```

### Functionality
1.	When required=False
2.	When required=True
3.  min and max specify the selectable files count


