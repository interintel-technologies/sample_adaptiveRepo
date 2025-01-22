# CC EXPIRATION

## Description
credit card cc expiration input field


## Configuration
- Pre-set a value using defaultValue, 
- name is form name
- required set required, defaults to being required unless set otherwise

## Structure
**SerializableElement**
### Mixins 
- UtilsMixin

### Core
the input month and year are submitted in the form *M/Y*  e.g 12/19


### Functionality
1. Should allow for a month and year selection
2. if required is specified, the element should validate as invalid during submission, form should not submit

