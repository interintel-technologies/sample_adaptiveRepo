# CART EDITOR

![Cart Editor](https://i.postimg.cc/bwPNpT7j/Screenshot-2024-10-17-111148.png)

## Description

This element is used to manage cart items. The cart is stored and loaded from local storage.

## Configuration

1. *CHECKOUT_SERVICE* - These are set in the datasource
2. *dispatch_return* - has a value eg `"return_cart_item_id"` indicates that the data for the dispatch return comes from the details field of the cart item. `eg- {"dispatch_return": "return_cart_item_id"}`

3. *CHECKOUT_SERVICE* - This is the service to be called when the Proceed To Checkout button button is clicked. Defined in the details object with a key of `checkout_service` and the value being a string. E.g `"checkout_service": "CHECKOUT"`
4. *CONTINUE_SHOPPING_SERVICE* - This is the service to be called when the Continue Shopping button button is clicked. Defined in the details object with a key of `continue_shopping_service` and the value being a string. E.g `"continue_shopping_service": "CONTINUE_SHOPPING"`

## datasource payload sample

```json
{
  "response": {
      "subdomain_details": "Subdomain not in request.",
      "get_profile": "Session Profile Captured",
      "data_source": {
          "cols": [
              {
                  "label": "id",
                  "type": "string",
                  "value": "id"
              },
              {
                  "label": "product id",
                  "type": "string",
                  "value": "product_item__id"
              },
              {
                  "label": "image",
                  "type": "string",
                  "value": "product_item__default_image"
              },
              {
                  "label": "name",
                  "type": "string",
                  "value": "product_item__name"
              },
              {
                  "label": "seller",
                  "type": "string",
                  "value": "product_item__institution"
              },
              {
                  "label": "quantity",
                  "type": "number",
                  "value": "quantity"
              },
              {
                  "label": "total",
                  "type": "number",
                  "value": "total"
              },
              {
                  "label": "price",
                  "type": "number",
                  "value": "price"
              },
              {
                  "label": "sub total",
                  "type": "number",
                  "value": "sub_total"
              },
              {
                  "label": "discount",
                  "type": "number",
                  "value": "discount"
              },
              {
                  "label": "vat",
                  "type": "number",
                  "value": "vat"
              },
              {
                  "label": "oher relief",
                  "type": "number",
                  "value": "other_relief"
              },
              {
                  "label": "other tax",
                  "type": "number",
                  "value": "other_tax"
              }
          ],
          "rows": [
              [
                  17714,
                  100325,
                  "",
                  "testing product 2",
                  533,
                  "5.00",
                  "2940.00",
                  "588.00",
                  "2940.00",
                  "0.00",
                  null,
                  null,
                  null
              ],
              [
                  17713,
                  100324,
                  "",
                  "testing product 1",
                  533,
                  "30.00",
                  "5100.00",
                  "200.00",
                  "6000.00",
                  "900.00",
                  null,
                  null,
                  null
              ],
              [
                  17712,
                  100517,
                  "crm_productitem_imagepath/image_picker5745353513143896097.png",
                  "Colgate Toothpaste",
                  533,
                  "20.00",
                  "2800.00",
                  "140.00",
                  "2800.00",
                  "0.00",
                  null,
                  null,
                  null
              ],
              [
                  17711,
                  100626,
                  "",
                  "e23242",
                  533,
                  "12.00",
                  "22300.80",
                  "2323.00",
                  "27876.00",
                  "5575.20",
                  null,
                  null,
                  null
              ]
          ],
          "lines": [],
          "groups": [],
          "data": [],
          "min_id": 0,
          "max_id": 0,
          "row_count": 4
      }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
