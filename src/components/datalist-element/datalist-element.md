# DATALIST ELEMENT

## Description

view and paging of data from DATA SOURCE in a table

## Configuration

- datasource dataname defaultValue

- list style type
`details['type'] = 'card' | 'table' | 'product'`
the type will be converted to Lowercase before comparison so any case would work

- list item column values to be formatted as download links  
`details['download_links'] = ['property1','property2']`

- Pagination options  
`details['page_limits']: [50, 100, 500]`  
if not specified, the listing default to 50 items per page with no options

- Auto reload
`details['reload'] = true`  
used to refresh the default dsc call for the datalist element. Set to interval to a default of 10000 miliseconds

- Auto reload_time
`details['reload_time'] = 5000`
time used to set the interval function used to refresh the default dsc call for the datalist element. If not specified and **reload** is set to true then interval will default of 10000 miliseconds 

- Selectable List items  
`details['selectable'] = true`

- alert  
`details['alert'] = true`
used in product-list to identify if a product reaches a low stock

> TODO should be an object to allow for more configurations

- Export
```js
    details['export'] = {
    "csv":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].csv"},
    "pdf":{"allowed":true,"filename":"i-INVEST_938_[Date(Min)=dd-MM-yyyy]_To_[Date(Max)=dd-MM-yyyy].pdf"}
    }
```
> **Note** The formatting [tokens](https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md) are from date-fns library (same as datasource parser and date and time elements)

- Row Actions
> TODO Link to Switch Link query configuration

- pre-selection, values passed in kind
- required, set min>0 or required to True, must also be selectable `details['selectable'] = true` 


- EmptyMessage
`details['empty_message'] = 'Empty message to show user'` 
Used for the empty view elemnt to display a message to the user that there is no data available

- Gateway
`details['gateway'] = 'nenasasa'` 
Used to determine the color of the image the value can be:
`'mipay'`
`'nenasasa'`


## Structure
**SerializableElement**

### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE**

- Datasource Dataname
self.params['data_name'] 
> TODO more in datasource mixin

- Pagination 
self.params['limit'] = self.pageSize; Specifying limit of data to return // default is 50  
self.params['page'] = self.page;  e.g 1,2,3,4  
self.params['q'] = self.q;  Column search filtering  

- Columns Ordering
self.params['order_by']

- Column dropdown filtering
>TODO complete

### Functionality
1.	When required=False and selectable, can submit null
2.	When required=True and selectable, must have a selection or be invalid



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
                // "list_filters": [
                //     "Drinks",
                //     "Paper"
                // ]
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
};

```