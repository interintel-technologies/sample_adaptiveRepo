# CART EDITOR 2

![Cart Editor 2](https://i.postimg.cc/SQnCHcXY/cartedtr2.png)

## Description
This element is used to manage cart items. The cart is gotten from the datasource payload.

### Mixins

- ecommerceMixin
- dataSourceMixin

## Datasource payload sample

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
                    "label": "cart_item",
                    "type": "href",
                    "value": "cart_item"
                }
            ],
            "rows": [
                [
                    16653,
                    100305,
                    "crm_productitem_imagepath/images.jfif",
                    "Minute Maid",
                    516,
                    "1",
                    "122.00",
                    "122.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ],
                [
                    16652,
                    100315,
                    "",
                    "Kakkk",
                    516,
                    "2",
                    "5000.00",
                    "2500.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ],
                [
                    16651,
                    100298,
                    "crm_productitem_imagepath/cosy-singles.jpeg",
                    "Cosy singles wrap 40's (40pcs =1 bale)",
                    516,
                    "1",
                    "1670.00",
                    "1670.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ],
                [
                    16650,
                    100295,
                    "crm_productitem_imagepath/tiss.png",
                    "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
                    516,
                    "1",
                    "2500.00",
                    "2500.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ],
                [
                    16649,
                    100306,
                    "crm_productitem_imagepath/download_2.jfif",
                    "Sufuria",
                    516,
                    "2",
                    "400.00",
                    "200.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ],
                [
                    16648,
                    100294,
                    "crm_productitem_imagepath/fay-unwrap.jpeg",
                    "100490 Fay TP Unwrap 6*8 Pcs (6pkts =1 bale)",
                    516,
                    "2",
                    "3800.00",
                    "1900.00",
                    "{\"url\": \"/DELETE CART ITEM/\", \"service\": \"DELETE CART ITEM\", \"icon\": \"shopping-basket\", \"params\": {\"cart_item_id\": \"id\"}}"
                ]
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 6
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": "" 
}
```