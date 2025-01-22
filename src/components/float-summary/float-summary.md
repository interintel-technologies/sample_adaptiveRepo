# BLOB ELEMENT

![Blob Element](https://i.postimg.cc/vmyq3fJR/Screenshot-2024-08-22-143141.png)

## Description

Used to display images/logos in rows and the images are gotten from **DATASOURCE**

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'Click to buy Airtime'`
2. *SUBTITLE* - contained in `defaultvalue` e.g `'Use service without login'`
3. *LINK* - Works like a button that is a link to a specified page. Set in the details object with a key of `link` and the value being an object. e.g `"link": {"path": "https://interintel.co.ke", "label": "Go to"}`

## Structure

1. *SectionPElementDsc*

### Functionality

N/A.
```

{
    "response_status": "00",
    "overall_status": "00",
    "action_id": 53,
    "response": {
      "subdomain_details": "Subdomain not in request.",
      "data_source": {
        "rows": [
          ["89", "Safaricom", 31800000, "Safaricom Bulk SMS","https://i.postimg.cc/vThtR0Fr/mpesa-removebg-preview.png","/safaricom"],
          ["89", "Airtel", 31800000, "Safaricom Bulk SMS","https://i.postimg.cc/vThtR0Fr/mpesa-removebg-preview.png","/safaricom"],
          ["89", "Telkmo", 31800000, "Safaricom Bulk SMS","https://i.postimg.cc/vThtR0Fr/mpesa-removebg-preview.png","/safaricom"],

         ],
        "data": [],
        "lines": [],
        "cols": [
          {"type": "string", "value": "id", "label": "id"},
          {"type": "string", "value": "name", "label": "name"},
          {"type": "number", "value": "amount", "label": "amount"},
          {"type": "string", "value": "description", "label": "description"},
          {"type": "string", "value": "logo", "label": "logo"},
          {"type": "string", "value": "path", "label": "path"},


        ],
        "row_count": 6,
        "min_id": 0,
        "groups": [],
        "max_id": 0},
    },
    "last_response": "",
  }
