# DATE
## Description

a date picker, 

## Functionality

1. Should return the date in the format specified in the [details]()`.output_format`
    if no format is specified or tokens are invalid, falls back to `dd/MM/yyyy`  
    the [kind]() column will be checked before the [defaultValue]() for the `output_format`, 
        **this is kept for backward compatibility and will log a warning**     

4. if `required` the current date should be pre-set as the initial date
5. if `not required`, the initial value should be blank, in this case a date should never be submitted unless 
    a selection was made

5. Should render a date from the value existing on `default value` as the initial value,
    this value if not empty should be parsed using the format specified in [details]()`.output_format`

6. if `noPastDate` exists in details, prevent selection of a past date by raising a Validation Error

> **Note** The formatting and parsing [tokens](https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md) are from date-fns library 

## Configuration 
`default value` :  '2020-11-12'
`details` :  {"input_format":"yyyy-MM-dd"}

or 

`default value` : '12-12-2020'
`details` :  {"input_format":"dd-MM-yyyy"}


{"output_format":"MM/yyyy","input_format":"dd-MM-yyyy"}


