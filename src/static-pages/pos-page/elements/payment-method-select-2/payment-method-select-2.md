# PAYMENT METHOD SELECT 2

![Payment Method Select](https://i.postimg.cc/0jKfmbzV/payment-method-select-2.png)

## Description

Renders columns with the payment methods and their relevant input.

## Configuration

1. Title is contained in `page input name` eg `"Select Payment Method"`

### About
Has 6 payment method options namely `Cash`,`Airtel Money`,`Tkash` ,`Mpesa` and `Card` for credit card option which includes `Visa` and `Mastercard`.

-When credit card is selected the following inputs are rendered `text-input` for name, `cc-input` for the 16-digit credit card number, `cc-expiration` for the credit card expiration date in the Month-Year format, `cvc-input` for the 3-digit security code.

-when cash is selected a numberpad is shown for input

-when airtel/tkash is selected a number input is shown for inputing phone number
