# PRODUCT VIEW

![Product View](https://i.postimg.cc/J7dv8nnp/product-view-new.png)

## Description

This element is used to display a product"s details and also has buttons to add a product to cart, a quantity count to specify the number of products, and a wishlist button.

## Configuration

1. *PRODUCT* - The product details are configured in the data-source payload"s rows section.

### Data-source payload sample

``` json
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
                    "label": "name",
                    "type": "string",
                    "value": "name"
                },
                {
                    "label": "image",
                    "type": "string",
                    "value": "default_image"
                },
                {
                    "label": "description",
                    "type": "string",
                    "value": "description"
                },
                {
                    "label": "price",
                    "type": "number",
                    "value": "unit_cost"
                },
                {
                    "label": "quantity",
                    "type": "number",
                    "value": "min_wholesale_limit"
                },
                {
                    "label": "category",
                    "type": "string",
                    "value": "shop_product_type__name"
                },
                {
                    "label": "product_item_variant_id",
                    "type": "string",
                    "value": "productitemvariant__id"
                },
                {
                    "label": "product_item_variant_attributes",
                    "type": "string",
                    "value": "productitemvariant__attributes"
                },
                {
                    "label": "product_item_variant_package",
                    "type": "string",
                    "value": "productitemvariant__package"
                },
                {
                    "label": "product_item_variant_cost",
                    "type": "string",
                    "value": "productitemvariant__variant_cost"
                }
            ],
            "rows": [
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    126,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Small"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "white"
                        }
                    ],
                    null,
                    50.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    127,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Small"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "white"
                        }
                    ],
                    {
                        "name": "Bale",
                        "level": 1,
                        "contains": "pieces",
                        "quantity": "10"
                    },
                    500.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    128,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Small"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "pink"
                        }
                    ],
                    null,
                    50.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    129,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Small"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "pink"
                        }
                    ],
                    {
                        "name": "Bale",
                        "level": 1,
                        "contains": "pieces",
                        "quantity": "10"
                    },
                    500.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    130,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Big"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "white"
                        }
                    ],
                    {
                        "name": "Bale",
                        "level": 1,
                        "contains": "pieces",
                        "quantity": "10"
                    },
                    500.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    131,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Big"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "white"
                        }
                    ],
                    null,
                    50.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    132,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Big"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "pink"
                        }
                    ],
                    null,
                    50.0
                ],
                [
                    100936,
                    "Rolls pAPER",
                    "",
                    "rolls",
                    50.0,
                    null,
                    "Papers & Rolls",
                    133,
                    [
                        {
                            "name": "Size",
                            "level": 2,
                            "value": "Big"
                        },
                        {
                            "name": "Color",
                            "level": 4,
                            "value": "pink"
                        }
                    ],
                    {
                        "name": "Bale",
                        "level": 1,
                        "contains": "pieces",
                        "quantity": "10"
                    },
                    500.0
                ]
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 8
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}
```
