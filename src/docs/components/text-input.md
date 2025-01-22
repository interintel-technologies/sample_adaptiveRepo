## TEXT INPUT 

## Description
a text input field

## Configuration
- set a value using defaultValue, 
- name is form name
- required max and min lengths max and min
- required set required, the min should also be > 0

## Structure
**SerializableElement**
### Mixins 
- UtilsMixin

### Core
displays a basic input type text
> TODO description on characters counter and validation 

### Functionality
1. if max is specified, the inputed characters should not be allowed to be more than max
2. if min is specified the i nputed characters should not be allowed to be less than min
3. min and max should be included in the element validation during submit
4. if default value is specified, that will be the value in the input when the element displays
5. if required is specified, the element should validate as invalid during submission, form should not submit
6. the submitted value when valid should have the name as the one specified in the input variable
