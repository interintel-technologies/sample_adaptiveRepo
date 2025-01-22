# NUMBER PICKER

![Number Picker](https://i.postimg.cc/2yQLYdJr/number-picker.png)

## Description

Displays a list of pre-defined amounts/numbers from an array that can be selected to a number input.

The amounts are loaded from the details.

## Configuration
1. *Amounts* - These are set in the details object with a key of `amounts` and the values being a list of numbers. E.g `{"amounts": [20,50,100,200,500]}`.
2. *Title* - Set in the `name` of the element e.g `Airtime Amount`
3. *isNumberCompatible* - Boolean Set in the details object of a number input element to ensure number picker only inputs the amounts in a valid place. Deafult is `true` e.g `"isNumberCompatible":true` 
