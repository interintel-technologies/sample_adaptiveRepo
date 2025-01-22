# BULK UPLOAD

![Bulk Upload](https://i.postimg.cc/15zDgfLK/Screenshot-2022-09-21-114202.png)

## Description

Multiple files picker.

## Configuration

1. To set title, use page input name
2. To set destcription use details, create an object with a key of description and put you're desired value
3. Set min>0 or required to True

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

1. When required=False
2. When required=True
3. min and max specify the selectable files count
