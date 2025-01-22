# PURCHASE ORDER EDITOR

![PURCHASE ORDER EDITOR](https://i.postimg.cc/Hnct993D/shopping-cart-btn-dsv2.png)

## Description

This element reuses cart editor to edit a purchase order

## Configurations

1. *CART* - Set in the datasource payload.

## Datasouce payload sample

```json
    {
  "response": {
      "subdomain_details": "Subdomain not in request.",
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
                  "label": "stockQuantity",
                  "type": "number",
                  "value": "stockQuantity"
              }
          ],
          "rows": [
              [
                  16616,
                  100315,
                  "",
                  "Kakkk",
                  516,
                  "1.00",
                  "2500.00",
                  "2500.00",
                  10
              ],
              [
                  16615,
                  100306,
                  "crm_productitem_imagepath/download_2.jfif",
                  "Sufuria",
                  516,
                  "6.00",
                  "1200.00",
                  "200.00",
                  10
              ],
              [
                  16608,
                  100297,
                  "crm_productitem_imagepath/cosy-wrap.jpeg",
                  "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
                  516,
                  "6.00",
                  "9960.00",
                  "1660.00",
                  10
              ],
              [
                  16607,
                  100293,
                  "crm_productitem_imagepath/fay-anti-wipes.JPG",
                  "100492 Fay antibacterial wet wipes 72*10 pcs",
                  516,
                  "11.00",
                  "36080.00",
                  "3280.00",
                  10
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
