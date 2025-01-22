## Payload

It is JSON
Here is a sample of payload that renders the login page and enable one to login
You can view the rendered interface at https://bidfather.com/index/



the payload that renders that is this
```
#!json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 34,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "get_interface": {
      "all_pages": {
        "2": {
          "Login": {
            "5": [
              "Login",
              "icons:lock"
            ]
          }
        }
      },
      "this_page_inputs": {
        "2": {
          "section_var": [
            "Login",
            "icons:lock"
          ],
          "5": {
            "Login": {
              "78": {
                "Login": {
                  "1": [
                    "Username/Email/Mobile Number",
                    "TEXT INPUT",
                    "5",
                    "45",
                    "email_msisdn",
                    "",
                    "hardware:smartphone",
                    "24|24|24",
                    "",
                    true,
                    "",
                    null,
                    null,
                    null,
                    "{}"
                  ],
                  "3": [
                    "FingerPrint",
                    "FINGERPRINT ELEMENT",
                    "0",
                    "0",
                    "fingerprint",
                    "",
                    null,
                    "24|24|24",
                    "",
                    false,
                    "",
                    null,
                    null,
                    null,
                    "{}"
                  ],
                  "5": [
                    "Sign In",
                    "SUBMIT",
                    "0",
                    "0",
                    "submit",
                    "",
                    "hardware:smartphone",
                    "24|24|24",
                    "",
                    false,
                    "",
                    null,
                    null,
                    null,
                    "{}"
                  ],
                  "input_var": [
                    "Login",
                    "FORM",
                    "0",
                    "0",
                    "MSISDN VALIDATION",
                    "",
                    "icons:lock",
                    "24|24|24",
                    "",
                    false,
                    "",
                    "LOGIN VALIDATION",
                    900,
                    null,
                    "{}"
                  ]
                }
              }
            },
            "page_var": [
              "Login",
              "icons:lock"
            ]
          }
        }
      }
    },
    "get_gateway_details": {
      "background_image": "radial-gradient(ellipse farthest-corner at 50% 100%,rgb(213, 213, 213) 10%,#ff0000 60%,rgb(213, 213, 213) 90%)",
      "name": "BidFather",
      "tagline": "Bid Father",
      "secondary_color": "#eb2027",
      "default_color": "#6e0003",
      "icon_image": "",
      "theme": "polymer3.0",
      "host": "bidfather.com",
      "logo": "administration_gateway_logo/bidfather_uZMBCSV.png",
      "accent_color": "rgba(38,0,0,0.9)",
      "primary_color": "#e26969"
    }
  },
  "last_response": ""
}
```

it is a small payload,  
try relating that payload to the interface created and the structuring described [here](https://bitbucket.org/interintel/adaptive-ui-web/wiki/ElementPayload) to help you understand it


the are various payload types, the one you seeing is for creating an interface  
interface payload can be of two types, get_section or get_interface  
get_section is for updating page sections (like in a flow with steps)  

get_interface updates the full interface from the  menus and tabs and tab content (the one you are seeing is a get_interface)



get_section will have this `payload["response"]["get_section"]`  
get_interface will have this `payload["response"]["get_interface"]`  


```
#!json
{
  "gateway_host": "bidfather.com",
  "response_status": "00",
  "CHID": "1",
  "lat": "38.9552001953",
  "lng": "-94.6448974609",
  "ip_address": "69.64.68.226",
  "response": {
    "event_status": "System User",
    "get_interface": {


```

the get_section is usually used to create the interface for the dialogs

ok, for the payload that creates the interface (get_interface)

it creates the menus/pages, the menu tabs, the menu tabs' content that posts (the boxes)

we can structure this down into this hierarchy 
PageGroups> Pages > PageInputGroups > PageInputs

- The PageGroups is what you see on the side drawer (main menu) e.g Home   
- The Pages are the child menus of the page e.g Login, Register  
- the PageInputGroups is the content of a tab like now Login form on the login Tab  
the PageInputGroup can be more than one in a tab, they are the boxes  
but the feed will always be one in a get_section payload  










now when we go into the feed, that's where post-list comes in
the feed content are Elements
post-list parser the elements payload to create the dom for the element
an example of an element payload is this
"1": [
                    "USERNAME",
                    "TEXT INPUT",
                    "2",
                    "45",
                    "USERNAME",
                    "",
                    "icons:account-circle",
                    "col-md-4",
                    "",
                    true
                  ],
the "1" is used for ordering



the name is in index 2 (TEXT INPUT)
this will be parsed to create a text input with the name as USERNAME and width col-md-4 and prefix icon as "icons:account-circle", it will also be set to not allow more that 45 chars



I recently wrote a PayloadParser that you can look at to help you see on how the payload is parsed into Pages,Tabs and Feed

https://bitbucket.org/interintel/polymer-dashboard/src/0ffeecf4deb70d5c457e0c2a6e7e2b189f6eb8fd/polymer/app/components/bundle.js?at=master&fileviewer=file-view-default
