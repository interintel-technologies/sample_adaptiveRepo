# SERVICES CAROUSEL

![Services Carousel](https://i.postimg.cc/FKbNCrNK/serv-carousel.png)

## Description

This element displays slides that auto-play each with a title, subtitle, button, and points with check icons on the left and an image on the right.

## Configuration

1. *SLIDES* - The slides are configured in the data-source payload.
2. *AUTO-PLAY_TIME* - The time in milliseconds to trigger the next slide set in the details object with a key of `autoPlayTime` with the value being a number. The default time is `10000` that is 10 seconds. E.g `"autoPlayTime": 12000`.

## Data-source payload sample

``` json
{
  "response":{
     "subdomain_details":"Subdomain not in request.",
     "get_profile":"Session Profile Captured",
     "data_source":{
        "cols":[
           {
              "label":"id",
              "type":"string",
              "value":"id"
           },
           {
              "label":"name",
              "type":"string",
              "value":"name"
           },
           {
              "label":"description",
              "type":"string",
              "value":"description"
           },
           {
              "label":"image",
              "type":"string",
              "value":"image"
           }
        ],
        "rows":[
           [
              "172",
              "Welcome To NenaSasa|Aliqua labore sit cupidatat irure consectetur proident.",
              '{"points":["Dolor do elit non aute ad ipsum ut sunt commodo.","Ipsum nulla aliquip dolor eu officia.","Do amet tempor eu qui commodo duis velit magna quis."],"link":"https://nikobizz/1/0"}',
              "https://nenasasa.com/media/dsc_imagelist_image/Group_18.png"
           ],
           [
              "174",
              "Compose|Proident qui laborum excepteur excepteur ipsum ipsum non tempor irure sunt deserunt ipsum est.",
              '{"points":["Dolor do elit non aute ad ipsum ut sunt commodo.","Ipsum nulla aliquip dolor eu officia.","Do amet tempor eu qui commodo duis velit magna quis."],"link":"https://nikobizz/1/0"}',
              "https://nenasasa.com/media/dsc_imagelist_image/SP_4.png"
           ],
           [
              "175",
              "Add Contact|Duis ipsum ad pariatur ipsum aliqua dolor minim do elit ut.",
              '{"points":["Dolor do elit non aute ad ipsum ut sunt commodo.","Ipsum nulla aliquip dolor eu officia.","Do amet tempor eu qui commodo duis velit magna quis."],"link":"https://nikobizz/1/0"}',
              "https://nenasasa.com/media/dsc_imagelist_image/SP_5.png"
           ],
           [
              "176",
              "Purchase Float|Magna esse labore mollit officia excepteur non dolor esse nulla quis excepteur.",
              '{"points":["Dolor do elit non aute ad ipsum ut sunt commodo.","Ipsum nulla aliquip dolor eu officia.","Do amet tempor eu qui commodo duis velit magna quis."],"link":"https://nikobizz/1/0"}',
              "https://nenasasa.com/media/dsc_imagelist_image/SP__6.png"
           ],
           [
              "178",
              "Contacts|Eu elit occaecat reprehenderit nisi excepteur in cupidatat nostrud Lorem anim nulla.",
              '{"points":["Dolor do elit non aute ad ipsum ut sunt commodo.","Ipsum nulla aliquip dolor eu officia.","Do amet tempor eu qui commodo duis velit magna quis."],"link":"https://nikobizz/1/0"}',
              "https://nenasasa.com/media/dsc_imagelist_image/Contact_list.png"
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
        "row_count":11
     }
  },
  "action_id":53,
  "response_status":"00",
  "overall_status":"00",
  "last_response":""
}
```
