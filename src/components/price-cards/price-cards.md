# PRICE CARDS

![Price Cards](https://i.postimg.cc/JnvL2sN0/Screenshot-2024-09-05-155248.png)

## Description

Displays a group of cards used to showcase prices of products having a title and description of the group, the card has a tile ,price tag, and a description.

## Configuration

1. **Prices** - Comes from the details object as an array`[{"name":"Basic SMS","count":"Ksh 1.00","description":"Basic SMS cover 1-99,999 sms in a day. Best for startups"},{"name":"Bulk SMS","count":"Ksh 0.80","description":"Bulk SMS cover 100,000-249,999 sms in a day. Best for cooperates"},{"name":"Super SMS","count":"Ksh 0.60","description":"Bulk SMS cover 250,000-499,999 sms in a day. Best for cooperates"},{"name":"Premium SMS","count":"Ksh 0.40","description":"Bulk SMS cover 500,000-2,499,999 sms in a day. Best for cooperates and Enterprises"}]`.
**CARD CONFIGURATION**

The cards are looped based on the data array which contains an array of objects

- **title** - Comes from the `name` string key in the object e.g - `"name":"Basic SMS"`
- **description** - Comes from the `description` string key in the object e.g - `"description":"Basic SMS cover 1-100 sms in a day. Best for startups",`. To have more than one point, separate the description using fullstop/period `.`.
- **price** - Comes from the `count` string key in the object e.g - `"count":"Ksh 640"`.

### Functionality

1. Display a group of cards used to showcase prices of products.
