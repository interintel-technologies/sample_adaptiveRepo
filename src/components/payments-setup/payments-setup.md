# PAYMENTS SETUP

![Payments Setup](https://i.postimg.cc/2y2k3Gq2/payments-setup.png)

## Description

This element provides a list of payment options that each have a set up button to configure each payment option except Accept Cash payment option which a user can check because it has no set up.

## Configuration

1. *TITLE* is contained in `page input name` eg `"Choose Payment Method"`.
2. *SUBTITLE* - is contained in the default value e.g `Ex incididunt minim anim Lorem velit fugiat eiusmod aute.`.
3. *OPTIONS* - is a array of the payments options available which is contained in the details object as an array of objects whose key is `options` and each object in the array having a key of `label` with its value being a string, and a key of `description` with its value also being a string. Example : `"options":[{"label":"Mipay","description":"Nisi mollit id reprehenderit aliquip deserunt eu ad."},{"label":"Mpesa","description":"Nisi mollit id reprehenderit aliquip deserunt eu ad."},{"label":"Mastercard","description":"Nisi mollit id reprehenderit aliquip deserunt eu ad."},{"label":"Visa","description":"Nisi mollit id reprehenderit aliquip deserunt eu ad."},{"label":"Accept Cash","description":"Nisi mollit id reprehenderit aliquip deserunt eu ad."}]`.

## Functionality

1. When a user clicks on the setup button, a service call request is made that contains the payment option label.
