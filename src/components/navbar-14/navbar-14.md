# NAVBAR 14

## Description
Navbar that is used for landing page of any site template that contains links that will smooth scroll on the same page

## Configuration
*LOGO* - path of the logo is contained/should be placed in the  `gateway.logo`
*Navigation Links* - looped from thr `pagegroups` and displays titles of all the pages in the pagegroups
## Structure
**BaseElement**

### Functionality
1 . Nav links once cliked will smooth scroll to sections on the page. 
2 . One can choose to hide page(s) titles from the navbar by adding a key in the element details object called `hide` which the value is an array of string that contains the title of the page(s) to be hidden e.g `{'hide':['About','Our Portal','Register']}` the titles About,Our Portal and Register will not be displayed on the navagation bar thus displaying the smooth scroll to page functionality for that specific page.

