# CLIENT ELEMENT

![Client Element](https://i.postimg.cc/SxcGpzJD/client-element.png)

## Description

Used to display images/logos in rows and the images are gotten from **DATASOURCE**

## Configuration

- *IMAGE_ALT* - Gotten from `name` column in the dsc e.g `UAP`
- *IMAGE* - Gotten from `image` column in the dsc.

## Structure

1. *SectionPElementDsc*

### Mixins

- DataSourceMixin
- UtilsMixin

### Functionality

N/A.

## Datasource payload sample

```json
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
          "value": "image"
        }
      ],
      "rows": [
        [
          "183",
          "Wisdom Seekers",
          "dsc_imagelist_image/Wisdom_Seekers.PNG"
        ],
        [
          "184",
          "Roomnysolar",
          "dsc_imagelist_image/Roomnysolar.PNG"
        ],
        [
          "185",
          "Safezone",
          "dsc_imagelist_image/Safe_Zone.PNG"
        ],
        [
          "186",
          "SilverstoneTyres",
          "dsc_imagelist_image/Silverstone_Tyres.PNG"
        ],
        [
          "187",
          "StarHouseGirlsBureau",
          "dsc_imagelist_image/Star_House_Girls_Bureau.PNG"
        ],
        [
          "188",
          "UAPOldMutual",
          "dsc_imagelist_image/UAPOldMutual.PNG"
        ],
        [
          "189",
          "Voltic",
          "dsc_imagelist_image/Voltic.PNG"
        ],
        [
          "190",
          "Romageco",
          "dsc_imagelist_image/Romageco.PNG"
        ],
        [
          "191",
          "KarenGolfClub",
          "dsc_imagelist_image/Karen_Golf_Club.PNG"
        ],
        [
          "192",
          "RayanButchery",
          "dsc_imagelist_image/Rayan_Butchery.PNG"
        ],
        [
          "193",
          "MicroMobile",
          "dsc_imagelist_image/Micromobile.PNG"
        ]
      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 11
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
