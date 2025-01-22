# PAYMENT METHOD SELECT

![Payment Method Select](https://i.postimg.cc/PxHq0m1y/image.png)

## Description

Renders a select with the payment methods and the relevant input.

## Configuration

1. Title is contained in `page input name` eg `"Choose Payment Method"`
2. `Message`: Appears between the methods select and the method input. Set in the details section with a key of `message`. E.g `"message": "Tsting"`.
3. `paymentMethods`: This is a list of the payment methods to be shown to the user. Only this methods have been built: ```["M-Pesa","Airtel", "T-Kash", "Card"]```. To use only sepcific methods, cnfigure thos in the details object with a key of `paymentMethods` with the value being an array of any of the methods mentioned before. E.g: `"paymentMethods": {"method": "M-Pesa", "options": ["buy Goods","Paybill"]},`. To use all of the methods, ignore this config or just use an empty array as the value.

-the paymentMethods also have options in the case of multiple options such as M-Pesa
 `"method": "M-Pesa", "options": ["Phone Number","Paybill","Buy Goods"]`

### Return

-When credit card is selected the following inputs are rendered `text-input` for name, `cc-input` for the 16-digit credit card number, `cc-expiration` for the credit card expiration date in the Month-Year format, `cvc-input` for the 3-digit security code.

-For the card option an object is submitted:

`
    {"method":"Card', "value":{""ame':"textValue","cc":"ccValue","expiry":"ccExpValue", "cvc":"cvcValue"}}
`
`1
while when `Mpesa Pay Bill` is submitted it returns an object
`
 {'method':'Mpesa Pay Bill', 'value':'account':accountNum,'paybill':paybillNum}
`
while when `Mpesa Buy Goods` is submitted it returns an object`
    {'method':'Mpesa Buy Goods', 'value':tillNum}
`

`
    {'method':'Airtel/Telkom/safaricom', 'value': inputValue}
`
