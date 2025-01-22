# PAYMENT STATUS ELEMENT

![PAYMENT STATUS ELEMENT]()

## Description

This element checks the order payment status using the data source service and sending the purchase order ID. (Make a data source request with the purchase order ID) 

Order status check will be accomplished by polling initially and later it will be updated to use web sockets. 

Order status will get polled after every 3 seconds for one minute until a status PAID is returned or the one-minute window ends. A loading or processing widget can be displayed within the waiting period. 

Otherwise return the payment status UNPAID. 

After getting the status, send a POST message to the payment initiator form i.e. the form that contains the iframe element or the SDK element. 

- Has a loader ongoing while it's polling.

## Configuration

1. *defaultvalue* - Set int the defaultvalue e.g`payment_status_source=[purchase_order_id]`.

2. *details* - ` {"post_data_label": ["reference", "status"], "data_polling": "true", "control_label": "status", "control_value": "PAID"}` set in the details element. When `data_polling` is set to true/exists  the element does polling for 60 seconds otherwise it just does a single request.