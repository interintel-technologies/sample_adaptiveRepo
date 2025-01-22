# PRODUCTS GRID 2

![Products Grid 2](https://i.postimg.cc/KvjSzW6f/Screenshot-2024-08-05-093616.png)

## Description

An element that displays a grid of products. The maximum number of products to appear at once are 8. Anything more than that is placed on the next slide which is accessible by either clicking on the navigation dots on the bottom of the element or navigation arrows. Also products can be loaded depending on their category which can be picked at the top of the element.

- Has a toggle-able grid view and list view

- has a cart editor panel that shows products added to cart in real time

- can also use filters which are set in the datasource e.g `"list_filters":["Drinks","Paper"]`

## Functionality

-Used to view Products. has an add to cart button that adds a specific product to cart and also has a view product button for viewing the product details in a new page

## Configuration

1. *PRODUCTS* - Products come from the datasource payload.

### Datasource payload sample

```json
    {
    "response": {
        "subdomain_details": "Subdomain not in request.",
        "data_source": {
            "cols": [
                {
                    "label": "id",
                    "type": "string",
                    "value": "product__id"
                },
                {
                    "label": "name",
                    "type": "string",
                    "value": "product__name"
                },
                {
                    "label": "image",
                    "type": "string",
                    "value": "product__default_image"
                },
                {
                    "label": "description",
                    "type": "string",
                    "value": "product__description"
                },
                {
                    "label": "price",
                    "type": "string",
                    "value": "product__unit_cost"
                },
                {
                    "label": "quantity",
                    "type": "string",
                    "value": "product__min_wholesale_limit"
                },
                {
                    "label": "category",
                    "type": "string",
                    "value": "product__shop_product_type__name",
                    "list_filters": [
                        "Drinks",
                        "Paper"
                    ]
                },
                {
                    "label": "Product View",
                    "type": "href",
                    "value": "product_view"
                }
            ],
            "rows": [
                [
                    100318,
                    "Lemonade",
                    "",
                    "Lemonade 200ml",
                    "240.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100215,
                    "Airwick Aerosol Spray ",
                    "crm_productitem_imagepath/MTU0NTI5NzQ4MTY3Ml9pVmBEX0FpciB3aWNr.jpg",
                    "Airwick",
                    "450.00",
                    null,
                    "Air Wick",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100317,
                    "Nikom",
                    "",
                    "Juice",
                    "150.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100316,
                    "MinutoMaido",
                    "",
                    "Juice",
                    "150.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100315,
                    "Kakkk",
                    "",
                    "kasdsdfs",
                    "2500.00",
                    null,
                    "Dresses",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100314,
                    "Passion Fruttie",
                    "",
                    "Juice",
                    "50.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100313,
                    "tests",
                    "",
                    "tests",
                    "123.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100311,
                    "Mango Fruit Juice",
                    "",
                    "fruit",
                    "140.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100306,
                    "Sufuria",
                    "crm_productitem_imagepath/download_2.jfif",
                    "Sufuria",
                    "200.00",
                    null,
                    "Kitchen Essentials",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100305,
                    "Minute Maid",
                    "crm_productitem_imagepath/images.jfif",
                    "Minute maid",
                    "122.00",
                    null,
                    "Soft Drinks",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100295,
                    "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
                    "crm_productitem_imagepath/tiss.png",
                    "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
                    "2500.00",
                    null,
                    "Tissues and Bathroom Rolls",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100298,
                    "Cosy singles wrap 40's (40pcs =1 bale)",
                    "crm_productitem_imagepath/cosy-singles.jpeg",
                    "Cosy singles wrap 40's (40pcs =1 bale)",
                    "1670.00",
                    null,
                    "Household",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100299,
                    "Cosy TP Unwrap 12*4 Pcs (12pkts =1 bale)",
                    "crm_productitem_imagepath/cosy-unwrap.jpeg",
                    "Cosy TP Unwrap 12*4 Pcs (12pkts =1 bale)",
                    "2012.00",
                    null,
                    "Household",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100297,
                    "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
                    "crm_productitem_imagepath/cosy-wrap.jpeg",
                    "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
                    "1660.00",
                    null,
                    "Household",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100294,
                    "100490 Fay TP Unwrap 6*8 Pcs (6pkts =1 bale)",
                    "crm_productitem_imagepath/fay-unwrap.jpeg",
                    "100490 Fay TP Unwrap 6*8 Pcs (6pkts =1 bale)",
                    "1900.00",
                    null,
                    "Tissues and Bathroom Rolls",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100293,
                    "100492 Fay antibacterial wet wipes 72*10 pcs",
                    "crm_productitem_imagepath/fay-anti-wipes.JPG",
                    "100492 Fay antibacterial wet wipes 72*10 pcs",
                    "3280.00",
                    null,
                    "Household",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ],
                [
                    100296,
                    "100488 Fay TP Wrap Singles 40 pcs (40 Pcs=1 b",
                    "crm_productitem_imagepath/FAY_WHITE-TOILET-PAPER_1_odqwtPm.jpg",
                    "100488 Fay TP Wrap Singles 40 pcs (40 Pcs=1 bale)",
                    "1780.00",
                    null,
                    "Household",
                    "{\"path\": \"/product_details\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
                ]
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 17
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}
```
