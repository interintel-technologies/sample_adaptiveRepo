#IMAGE INPUT

## Description
Image picker and uploader

## Configuration
- Pre-set a value using defaultValue, 
- Name is form name
- Required set required, defaults to being required unless set otherwise

## Structure
**SerializableElement**

### Mixins 
- utilsMixin
- httpMixin

### Core
the submitted value is the temp file name from temp file upload

#### Properties
- fileName String

#### Methods
- updateUploadMessage(message)
- uploadImage(fileInput)
- resetUpload()
- previewUpload(src)


### Functionality
1. Should allow for Image Selection For Upload
2. The form value submitted should be the [response](link to Extends) after upload 
3. If [defaultValue]() is not null, it is a switch image url and this is edit-mode, it should be previewed
4. When in edit-mode [min](), [max]() and [required]() field are ignored during validation as there is already an image  
  if required is specified, the element should validate as invalid during submission
5. Should provide a way of un-setting the current selection in create or edit-mode
6. Should preview image selected
