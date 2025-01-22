# BAR CHART

  

## Description

This component is used in the service page to presents categorical data proportional to the values that they represent.

  

## Configuration

The component data is fed via the `DATASOURCE_PAYLOAD` .
**Future updates**
 * User can be able to select the data that they want to desplay.
 * Filter number of bin to be shown

**Example data**

```  javascript

CODE: "KARENCLUB",

CONTACT: "Kcc Ladies Caddies-April 2020↵Kcc Men Caddies-April 2020",

DATE: "Apr 16 2020, 1:15:00 PM",

DELIVERED: "127.0",

DELIVERED(%): "84.67",

MESSAGE: "Kindly arrange to come for your voucher on Friday 17th April at 11 am at the caddy shed. Please remember to carry your caddy, badge and let us all keep time.",

OFFLINE: "0.0",

OFFLINE(%): "0.0",

SENT: "23.0",

SENT(%): "15.33",

UNDELIVERED: "0.0",

UNDELIVERED(%): "0.0",

UNKNOWN: "0.0",

UNKNOWN(%): "0.0",

```


## Structure

**BaseElement**

  

### Mixins

- UtilsMixin

  

### Functionality

1. The button when clicked should redirect the user to a destination url.