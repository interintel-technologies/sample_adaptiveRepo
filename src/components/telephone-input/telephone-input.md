# Telephone Input

![Telephone Input](https://i.postimg.cc/yNSJgYQ9/Screenshot-from-2023-04-28-01-20-21.png)

## Description

Telephone Input element.

## Configuration

3. *REQUIRED* - Is the value of the input required. Set in `required`
4. *HINT* - Hint that appears in the input if there is nothing in the input. Set in `details` with a key of `hint`
5. *HELP* - Text that appears below input. Set in `details` with a key of `help`

## Functionality

1. If default value is specified, that will be the value in the input when the element displays
2. If required is specified, the element should validate as invalid during submission, form should not submit
3. The submitted value when valid should have the name as the one specified in the input variable
