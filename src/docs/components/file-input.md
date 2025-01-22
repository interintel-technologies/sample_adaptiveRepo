# File Input

## Description
File picker and Uploader


## Configuration
- Pre-set a value using defaultValue, 
- Name is form name
- Required set required, defaults to being required unless set otherwise
- *file_size_limit* - optional, can set in the details object  as follows: `{"file_size_limit":12000000}` where the value is a type of  number of the maximum upload file size in bytes.

## Structure
**SerializableElement**

### Mixins 
- UtilsMixin

### Core
the submitted value is the temp file name from temp file upload

#### Properties
- extensions Array

#### Methods
- updateUploadMessage(message)
- uploadFile(fileInput)
- resetUpload()

### Functionality
1. Should allow for File Selection
2. if required is specified, the element should validate as invalid during submission
