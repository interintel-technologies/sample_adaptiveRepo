# INVOICE FORM

## Description

This form displays an invoice with the functionality of making payments if the invoice itself is marked as not paid.

## Configuration

1. *SOCIAL lINKS* - set in the details object as an object with a key of `socialLinks` and the value being an array of strings. E.g `"socialLinks":["facebook|https://www.facebook.com/Nenasasa-112720603742419/","instagram|https://www.instagram.com/nenasasa_ke/","twitter|https://twitter.com/nenasasa_ke?s=09","linkedin|https://www.linkedin.com/showcase/nenasasa/","youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"]`.
2. *IS PAID* - set in the details object as an object with a key of `isPaid` and the value being a boolean. E.g `"isPaid":true`.
3. *INVOICE NO* - set in the details object as an object with a key of `invoiceNo` and the value being a string. E.g `"invoiceNo":"2233445"`.
4. *INVOICE DATE* - set in the details object as an object with a key of `invoiceDate` and the value being a string. E.g `"invoiceDate":"Tue Oct 19 2021"`.
5. *RECIPIENT* - set in the details object as an object with a key of `recipient` and the value being an object. E.g `"recipient":{"name":" ABC ENTERPRISES","P.O Box":"11107","email":"dijdijdi@jidjij.com"}`.
6. *SENDER* - set in the details object as an object with a key of `sender` and the value being an object. E.g `"sender":{"name":" ABC ENTERPRISES","P.O Box":"11107","email":"dijdijdi@jidjij.com"}`.
7. *text* - This is additional information to include on the form done by a key of `text` and the value being an object. E.g `"text":"your text here"`
