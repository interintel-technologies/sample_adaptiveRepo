# Cvc Input 

## Description
Credit card code verification input

## Configuration 
- Name is form name
- Required set required, defaults to being required unless set otherwise

## Structure
**SerializableElement**

### Mixins 
- UtilsMixin

### Core
the input digits are submitted as is e.g 442


### Functionality
1. Should allow for a credit card number input up to 16 digits
2. If required is specified, 
  the element should validate as invalid during submission, 
  form should not submit
3. Input max length should be 4
