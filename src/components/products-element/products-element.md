# PRODUCTS ELEMENT

![Products Element](https://i.postimg.cc/CxRYpFpq/products-element-fixed.png)

## Description

Used to display list of products which comprise of TITLE,DESCRIPTION and IMAGE
The items are loaded from the **DATASOURCE**

## Configuration

1. *TITLE* - Gotten from `name` column in the dsc by a eg. `Mipay`
2. *LINK* - Gotten from `name` column in the dsc by a eg. `https://mipay.cash`
2. *DESCRIPTION* - Gotten from `description` column in the dsc
3. *IMAGE* - Gotten from `image` column in the dsc.
4. *COLORS*-Theme colors for each product set in the details object with a key of `colors` and the value being an array of colors e.g `"colors":["red","green","blue"]`. Hex and Rgb Values can also be used e.g `"colors":["#f29b35","#06519c","#043d5d","#e6405c"]`

### Mixins

- DataSourceMixin
- UtilsMixin

### Functionality
1. Display Product Boxes with details of each product.

## Datasource payload sample

```json
    {
       "response": {
    "subdomain_details": "Subdomain Details Updated",
    "get_profile": "Session Profile Captured",
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
                "132",
                "Mipay|https://mipay.cash",
                "A payment gateway that allows businesses to accept mobile money and card transnational payments",
                "dsc_imagelist_image/Mipay_1.png"
            ],
            [
                "133",
                "Nikobizz|https://nikobizz.com",
                "An online platform that provides an e-commerce solution for ordinary, everyday businesses to ensure they keep up with our fast changing mode of trans-acting",
                "dsc_imagelist_image/nikobizz.png"
            ],
            [
                "134",
                "Zua|https://zua.ai",
                "A machine learning system that offers mitigation and system solution to important business challenges",
                "dsc_imagelist_image/Zua.png"
            ],
            [
                "136",
                "NenaSasa|https://nenasasa.com/",
                "We offer customer communication solutions through SMS and Email bulk communication, USSD and IVR platforms",
                "dsc_imagelist_image/Nena_sasa.png"
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