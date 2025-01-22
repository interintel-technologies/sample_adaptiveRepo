# IFRAME ELEMENT

![Iframe Element ]()

## Description

A fullscreen iframe Used to display a dynamic url within. Uses postMessage window event to send and receive data from to and to the Parent window

## Configuration

1. *URL* -the url to be shown in the iframe. Set in the defaultvalue  e.g `"https://jkamau-mipay.staging.interintel.co/card-payment/"`
2. *sandbox* - set inn the details object with key value of `"sandbox":true`. if true or present this add the sandbox attribute to the iframe `sandbox='allow-forms allow-top-navigation allow-same-origin allow-scripts allow-popups'`


### Functionality

1. Used in displaying an existing url page within the iframe and sending/receiving data to Parent Window using window events i.e `window.parent.PostMessage()`
