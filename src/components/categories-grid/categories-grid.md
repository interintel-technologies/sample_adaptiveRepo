# CATEGORIES GRID

![Categories Grid](https://i.postimg.cc/bNqQ6gXX/Screenshot-2023-01-03-110937.png)

## Description

This element displays categories in a grid with each grid item having a name, and an image.

## Configuration

1. *CATEGORIES* - These are set in the data source payload.

## Data-source payload sample

``` json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["89", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"],
        ["90", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"],
        ["91", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"],
        ["98", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"],
        ["99", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"],
        ["100", "Funiture", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.425xh&resize=980:*"]
       ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "number", "value": "image", "label": "image"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
