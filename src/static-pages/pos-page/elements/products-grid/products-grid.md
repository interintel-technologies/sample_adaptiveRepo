# PRODUCTS GRID

![PRODUCTS GRID](https://i.postimg.cc/wvhfsDvm/dsv2-0-products-grid2.png)

## Description

This element displays products in a grid with each grid having 15 items and if there are more than 15 products then navigation buttons appear to move to the next slide of products still in a grid. Each product has a name, image, price, id, rating and a category.

## Configuration

1. _PRODUCTS_ - Products come from the data-source payload.
2. _VIEW_ALL_LINK_ - This is the link used on the view all button to another page. If its not defined then the view all button will not be rendered. It is set in the details object with a key of `viewAllLink` and a the value is a string. E.g `"viewAllLink": "https//mipay.cash"`

## Data-source payload payload

```json
{
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "data_source":{
        "cols":[
           {
              "label":"id",
              "type":"string",
              "value":"product__id"
           },
           {
              "label":"name",
              "type":"string",
              "value":"product__name"
           },
           {
              "label":"image",
              "type":"string",
              "value":"product__default_image"
           },
           {
              "label":"description",
              "type":"string",
              "value":"product__description"
           },
           {
              "label":"price",
              "type":"string",
              "value":"product__unit_cost"
           },
           {
              "label":"quantity",
              "type":"string",
              "value":"product__min_wholesale_limit"
           },
           {
              "label":"category",
              "type":"string",
              "value":"product__shop_product_type__name",
              "filters": {
                "drinks": ["Soft drinks", "Hard drinks"],
                "food": ["snacks", "legumes"]
              }
           },
           {
              "label":"Add to Cart",
              "type":"href",
              "value":"add_to_cart"
           },
           {
              "label":"Product View",
              "type":"href",
              "value":"product_view"
           }
        ],
        "rows":[
           [
              100315,
              "Kakkk",
              "",
              "kasdsdfs",
              "2500.00",
              null,
              "Dresses",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100313,
              "tests",
              "",
              "tests",
              "123.00",
              null,
              "Soft Drinks",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100311,
              "Mango Fruit Juice",
              "",
              "fruit",
              "140.00",
              null,
              "Soft Drinks",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100306,
              "Sufuria",
              "crm_productitem_imagepath/download_2.jfif",
              "Sufuria",
              "200.00",
              null,
              "Kitchen Essentials",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100305,
              "Minute Maid",
              "crm_productitem_imagepath/images.jfif",
              "Minute maid",
              "122.00",
              null,
              "Soft Drinks",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100295,
              "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
              "crm_productitem_imagepath/tiss.png",
              "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
              "2500.00",
              null,
              "Tissues and Bathroom Rolls",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100298,
              "Cosy singles wrap 40's (40pcs =1 bale)",
              "crm_productitem_imagepath/cosy-singles.jpeg",
              "Cosy singles wrap 40's (40pcs =1 bale)",
              "1670.00",
              null,
              "Household",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100299,
              "Cosy TP Unwrap 12*4 Pcs (12pkts =1 bale)",
              "crm_productitem_imagepath/cosy-unwrap.jpeg",
              "Cosy TP Unwrap 12*4 Pcs (12pkts =1 bale)",
              "2012.00",
              null,
              "Household",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100297,
              "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
              "crm_productitem_imagepath/cosy-wrap.jpeg",
              "Cosy TP Wrap 4*10 Pcs (4pkts =1 bale)",
              "1660.00",
              null,
              "Household",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100294,
              "100490 Fay TP Unwrap 6*8 Pcs (6pkts =1 bale)",
              "crm_productitem_imagepath/fay-unwrap.jpeg",
              "100490 Fay TP Unwrap 6*8 Pcs (6pkts =1 bale)",
              "1900.00",
              null,
              "Tissues and Bathroom Rolls",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100293,
              "100492 Fay antibacterial wet wipes 72*10 pcs",
              "crm_productitem_imagepath/fay-anti-wipes.JPG",
              "100492 Fay antibacterial wet wipes 72*10 pcs",
              "3280.00",
              null,
              "Household",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ],
           [
              100296,
              "100488 Fay TP Wrap Singles 40 pcs (40 Pcs=1 b",
              "crm_productitem_imagepath/FAY_WHITE-TOILET-PAPER_1_odqwtPm.jpg",
              "100488 Fay TP Wrap Singles 40 pcs (40 Pcs=1 bale)",
              "1780.00",
              null,
              "Household",
              "{\"url\": \"/ADD TO CART/\", \"service\": \"ADD TO CART\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}",
              "{\"path\": \"/product_detail\", \"icon\": \"icon\", \"params\": {\"product_item_id\": \"id\"}}"
           ]
        ],
        "lines":[
           
        ],
        "groups":[
           
        ],
        "data":[
           
        ],
        "min_id":0,
        "max_id":0,
        "row_count":12
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
