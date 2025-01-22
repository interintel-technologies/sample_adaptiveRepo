# BLOB CAROUSEL

![Blob Carousel](https://i.postimg.cc/MKNHDbCm/blob-carousel.png)

## Description
This element displays items in a carousel.

## Configuration

1. *Items* - set in the datasource

## Datasource Payload

```json
{

  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
               ["0", "Pay TV","Pay for your Tv bills  from  various providers","fa-solid fa-mobile"],
        ["1", "Buy Airtime","Buy safaricom, airtel and telkom airtime with ease","fa-solid fa-scroll"],
        ["2", "Pay Bills","Handle your various bills and efficiently track them","fa-solid fa-tv"],
        ["3", "Pay TV","Pay for your Tv bills  from  various providers","fa-solid fa-mobile"],
        ["4", "Buy Airtime","Buy safaricom, airtel and telkom airtime with ease","fa-solid fa-scroll"],
        ["5", "Pay Bills","Handle your various bills and efficiently track them","fa-solid fa-tv"],

       ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "number", "value": "id", "label": "id"},
        {"type": "string", "value": "name", "label": "name"},
        {"type": "string", "value": "description", "label": "description"},
         {"type": "string", "value": "icon", "label": "icon"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",

}
```


 