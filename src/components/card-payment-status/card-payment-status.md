# PAYMENT STATUS ELEMENT

![CARD PAYMENT STATUS ELEMENT]()

## Description

This element checks the order payment status using the data source service and sending the purchase order ID. (Make a data source request with the purchase order ID) 

Order status check will be accomplished by polling initially and later it will be updated to use web sockets. 

Order status will get polled after every 3 seconds for one minute until a status PAID is returned or the one-minute window ends. A loading or processing widget can be displayed within the waiting period. 

Otherwise return the payment status UNPAID. 

After getting the status, send a POST message to the payment initiator form i.e. the form that contains the iframe element or the SDK element. 

- Has a loader ongoing while it's polling.

## Configuration

1. *defaultvalue* - Set int the defaultvalue e.g`purchase_order_id=000000, reference=000000, status=PAID`.
