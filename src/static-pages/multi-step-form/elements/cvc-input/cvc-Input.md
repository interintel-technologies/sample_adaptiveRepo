# CVC IPUT

## Description

Card Verification Code/value input. It is the final three digits of the number printed on the signature strip on the reverse of your card

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'CVV/CVC'`.
2. *REQUIRED* set required, defaults to being required unless set otherwise.

## Structure

**SerializableElement**

### Mixins

- UtilsMixin

### Core

the input digits are submitted as is e.g 442

### Functionality

1. Should allow for a number input up to 3 digits
2. If required is specified, the element should validate as invalid during submission, form should not submit.
