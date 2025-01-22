# PRODUCTS EXPIRY

![Products Expiry](https://i.postimg.cc/Y0Fvtmm2/Screenshot-2023-05-25-143205.png)

## Description

This element is used to set the expiry date of products. Returns a list of product ids and the set expiry date for each.

## Configuration

1. *CART* - Set in the datasource payload.

## Datasource payload sample

``` json
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
                  "label": "image",
                  "type": "string",
                  "value": "product_item__default_image"
              },
              {
                  "label": "name",
                  "type": "string",
                  "value": "product_item__name"
              },
          ],
          "rows": [
              [
                  16616,
                  "",
                  "Kakkk",
              ],
              [
                  16615,
                  "crm_productitem_imagepath/download_2.jfif",
                  "Sufuria"
              ],
              [
                  16608,
                  "crm_productitem_imagepath/cosy-wrap.jpeg",
                  "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
              ],
              [
                  16607,
                  "crm_productitem_imagepath/fay-anti-wipes.JPG",
                  "100492 Fay antibacterial wet wipes 72*10 pcs",
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
