# TILE ELEMENT 6

![Tile Element 6](https://i.postimg.cc/7YnBnp7M/tile-element-6-nikobizz.png)

## Description

Displays tiles with each tile having an image on the left and text on the right.

## Configuration

1. Tiles comes from the datasource payload.
2. *Images*- the image column and its rows from the datasource can be optional. if ommited a preset array of images populates the tiles. 

## Functionality

1. None.

### Datasource payload sample

``` json
{
  "response_status":"00",
  "overall_status":"00",
  "action_id":53,
  "response":{
  "subdomain_details":"Subdomain not in request.",
  "get_profile":"Session Profile Captured",
  "data_source": {
       "cols": [
           {
           "label": "id",
           "type": "string",
           "value": "id"
           },
           {
           "label": "name",
           "type": "string",
           "value": "name"
           },
           {
           "label": "description",
           "type": "string",
           "value": "description"
           },
           {
           "label": "image",
           "type": "string",
           "value": "image"
           }
       ],
       "rows": [
           [
           "155",
           "Inventory Management",
           "Efficiently track and manage your inventory with our user-friendly system.From tracking stock levels to generating detailed reports, our solution empowers you to stay organized and optimize your inventory management process",
           "dsc_imagelist_image/Customize_messages.png"
           ],
           [
           "156",
           "Nikobizz Point Of Sale (POS)",
           "Simplify your retail transactions with our intuitive point of sale feature. Whether you're processing sales in-store or on the go, our POS solution offers seamless integration with your inventory, real-time reporting and customizable features to meet your unique business needs",
           "dsc_imagelist_image/Reach_contact_group.png"
           ],
           [
           "157",
           "Nikobizz Shop",
           "Connect directly with distributors to streamline your supply chain and access a wide range of products. Our platform facilitates easy communication and transactions between shopkeepers and distributors, ensuring efficient procurement and stocking process",
           "dsc_imagelist_image/Purchase_float.png"
           ],
           [
           "158",
           "Effortless Payment",
           "Through our product MIPAY we streamline your payment process with our seamless payment integartion. Accepting various payment methods including credit/debit cards, mobile payments and online transfers, providing convenience for your customers and ensuring smooth transactions at every step.",
           "dsc_imagelist_image/Short_code_request.png"
           ],
           [
           "159",
           "Flexible Credit Lines",
           "Empower shopkeepers with flexible credit lines to purchase goods from distributors directly through our platform. Access customizable credit tailored options to your specific needs, allowing you to manage cash flow effectively and make strategic purchasing decisions",
           "dsc_imagelist_image/Short_code_request.png"
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
"last_response":""
}
```