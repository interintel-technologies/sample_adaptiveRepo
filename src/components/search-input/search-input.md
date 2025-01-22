# SEARCH INPUT

![Search Input](https://i.postimg.cc/tCzpnprH/search-input-dsv2.png)

## Description

Search input element.

## Configuration

1. *MIN* - Minimum length of characters in the input. Set in `min`. Minimum value should be `1`;
2. *MAX* - Maximum length of characters in the input. Set in `max`
3. *REQUIRED* - Is the value of the input required. Set in `required`
4. *HINT* - Hint that appears in the input if there is nothing in the input. Set in `details` with a key of `hint` e.g `Search Here...`
5. *HELP* - Text that appears below input. Set in `details` with a key of `help` e.g `"help":"Type in the input box to search"`

## Functionality

1. If max is specified, the inputted characters should not be allowed to be more than max
2. If min is specified the inputted characters should not be allowed to be less than min
3. Min and max should be included in the element validation during submit
4. If default value is specified, that will be the value in the input when the element displays
5. If required is specified, the element should validate as invalid during submission, form should not submit
6. The submitted value when valid should have the name as the one specified in the input variable
