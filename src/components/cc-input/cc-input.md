 # Cc Input

![cc input](https://i.postimg.cc/ZRZNG5yD/Screenshot-from-2023-01-20-12-03-18.png)

## Description

Credit card Number Input. It only works for Visa and Mastercard cards.

## Configuration

- Pre-set a value using defaultValue
- Name is form name
- Required set required, defaults to being required unless set otherwise

## Structure

**SerializableElement**

### Mixins

- UtilsMixin

### Core

the input digits are submitted in groups of 4s with a space e.g 4444 0000 0000 0000

### Functionality

1. Should allow for a credit card number input up to 16 digits, maxlength and width should be set to 20 to consider the 4 space values needed between the numbers for formatting.
2. if required is specified, the element should validate as invalid during submission, form should not submit
