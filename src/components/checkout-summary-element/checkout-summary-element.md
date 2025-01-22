# checkout summary element

![Checkout summary element](https://i.postimg.cc/3NWJMQqW/Screenshot-from-2023-04-15-21-07-35.png)

The **CheckOutSummaryElement** class is a custom element that extends the SectionPElementDsc class and uses the ThemeMixin mixin. 

## Properties

**activeTabIndex**: *Number*
A property that represents the index of the active payment method tab. The default value is *1*.

## Methods

**changeMethod(id: Number)**
A method that changes the active payment method tab based on the id parameter. It sets the activeTabIndex property to the id parameter and logs whether the activeTabIndex is equal to the id parameter.

## Details Objects

``` json
'{"methods": [{"id": 1, "label": "Cash", "link": ""}, {"id": 2, "label": "Mpesa", "link": ""}, {"id": 3, "label": "Credit Card", "link": ""}, {"id": 4, "label": "Airtel Money", "link": ""}, {"id": 5, "label": "Tkash", "link": ""}, {"id": 6, "label": "Mipay", "link": "https://mipay.cash/sale/?product_item_id=100213&amount=100&payment_method=CARD#/0/0"}]}'
```
