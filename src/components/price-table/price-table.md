# PRICE TABLE

![Price Table](https://i.postimg.cc/cJtKcxSg/Screenshot-2022-09-06-143135.png)

## Description

Displays a group of cards used to showcase prices of products having a title and description of the group, the card has a tile ,price tag,description and a button.

## Configuration

1. *PRICES* - Set in the details object. e.g:

```json
{
    "SMS Service Packages|These are the best prices for our sms services": [
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Basic SMS",
        "count":"Ksh 1.00",
        "description":"Basic SMS cover 1-99,999 sms in a day. Best for startups"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Bulk SMS",
        "count":"Ksh 0.80",
        "description":"Bulk SMS cover 100,000-249,999 sms in a day. Best for cooperates"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Super SMS",
        "count":"Ksh 0.60",
        "description":"Bulk SMS cover 250,000-499,999 sms in a day. Best for cooperates"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Premium SMS",
        "count":"Ksh 0.40",
        "description":"Bulk SMS cover 500,000-2,499,999 sms in a day. Best for cooperates and Enterprices"
    }],
    "Email Service Package|These are the best prices for our email services":[
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Basic Email",
        "count":"Ksh 1.00",
        "description":"Basic Emails cover 1-99,999 Emails in a day. Best for startups/small venture"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Bulk Email",
        "count":"Ksh 0.80",
        "description":"Bulk Emails cover 100,000-249,999 Emails in a day. Best for cooperates"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Super Email",
        "count":"Ksh 0.60",
        "description":"Bulk Emails cover 250,000-499,999 Emails in a day. Best for cooperates"
    },
    {
        "kind":"https://nenasasa.com/home/#/1/0",
        "name":"Premium Email",
        "count":"Ksh 0.40",
        "description":"Bulk Emails cover 500,000-2,499,999 Emails in a day. Best for cooperates and Enterprices"
    }]
}
```

### GROUP CONFIGURATION

- **Group title** - The groups title comes from the group array on the *dsc payload*  as form of a string split by a pipe character "|" e.g `"SMS Service Packages|These are the best prices for our sms services"` 
The title here is on the left of the pipe `"SMS Service Packages`
- **Group description** - The groups title comes from the group array on the *dsc payload*  as form of a string split by a pipe character "|" e.g `"SMS Service Packages|These are the best prices for our sms services"` 
The title here is on the right of the pipe `"These are the best prices for our sms services`

### CARD CONFIGURATION

The cards are looped based on the data array which contains an array of objects

- **Card title** - Comes from the `name` string key in the object e.g - `"name":"Basic SMS"`
- **Card description** - Comes from the `description` string key in the object e.g - `"description":"Basic SMS cover 1-100 sms in a day. Best for startups"`
- **Card price** - Comes from the `count` string key in the object e.g - `"count":"Ksh 640"`
- **Card button link** - Comes from the `kind` string key in the object e.g - `https://nenasasa.com`

## Structure

1. *BaseElement*

### Functionality

1. Display a group of cards used to showcase prices of products
