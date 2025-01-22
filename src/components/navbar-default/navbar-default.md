# NAVBAR DEFAULT

## Description
Navbar that renders groups of menus with routes and service to preload

## Configuration
Menus structure takes the format of all_pages with a service added

the menu items are defined the defaultValue

e.g
for a structure like
```
Home
    - About
    - Popular
    - Contact
```


The defaultValue shoudl contain the following
```
{
    "1": {
        "Home": {
            "2": [
                "Popular",
                "icons:profile",
                "popular",
                "POPULAR SERVICE"
            ],
            "3": [
                "Contact",
                "icons:profile",
                "contact"
                "HOME"
            ],
            "1": [
                "About",
                "icons:mail",
                "about"
                "ABOUT SERVICE"
            ]
        }
    }
}
```

Structure Description

- "1" controls the overall ordering of the groups,
- "2","3","1" controls the ordering of the  sub menus
- the sub-menus are made up of the following index items
    - [0]  - Title
    - [1] - icon
    - [2] - the path that when navigated to will render the service interface (see the next)
    - [3] - service to load 



## Structure
**BaseElement**

### Mixins 
- TODO

### Core
> TODO

### Functionality
1.	TODO

