# IMAGES CAROUSEL

![Images Carousel](https://i.postimg.cc/y6RRrh5b/Screenshot-2022-06-06-172043.png)

## Description

This element displays a list of carousel images with a title, subtitle, and description with navigation dots at the bottom to move slides.

## Configuration

1. *SLIDES* - The slides are configured in the data-source payload.
2. *NO_OF_IMAGES_IN_SLIDE* - The number of images to display in the slide. The default is `3`. E.g `"noOfImagesInSlide": 4`.

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
         ["https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."],
         ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."],
         ["https://engelska.se/sites/default/files/styles/large/public/Applebreckland.jpg?itok=3Z46BaiS", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."],
         ["https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."],
         ["https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."],
         ["https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg", "Learn", "Good Knowledge", "Lorem commodo ullamco aliqua irure eu est sit sint mollit et dolore."]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "url", "label": "url"},
         {"type": "string", "value": "title", "label": "title"},
         {"type": "string", "value": "subtitle", "label": "subtitle"},
         {"type": "string", "value": "description", "label": "description"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```