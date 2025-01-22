# NAVBAR 15

![Navbar 15](https://i.postimg.cc/KY2pJHTm/Screenshot-2022-09-06-112701.png)

## Description

Navbar that is used for landing page of any site template that contains links that will smooth scroll on the same page and can group pageGroup titles under a single tile

## Configuration

- *Logo* - path of the logo is contained/should be placed in the  `gateway.logo`
- *Navigation Links* - looped from thr `pageGroups` and displays titles of all the pages in the pageGroups
- *Group PageGroup Titles*  - Group PageGroup titles under a dropdown by adding the key `"group"` and value as array of string of the Page Group Titles eg:

``` json
{
    "groupTitle": "Features",
    "group": ["Nikobizz loyalty", "Nikobizz Booking"]
}
```

- *Hiding pages* - One can choose to hide page(s) titles from the navbar by adding a key in the element details object called `hide` which the value is an array of string that contains the title of the page(s) to be hidden e.g:

``` json
{
    "hide": ["About", "Our Portal", "Register"]
}
```

The titles About,Our Portal and Register will not be displayed on the navigation bar thus displaying the smooth scroll to page functionality for that specific page.

- *Hiding page groups* - just as above but if you choose to hide the pageGroup all the page under that pageGroup will not be shown:

``` json
    {
        "hide": ["About", "Our Portal", "Register"]
    }
```

- *Custom Logo* - you can place a custom logo either by a url source or by the project directory:

``` json
    {
        "logo": "src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png"
    }
```

or

``` json
    {
        "logo": "https://your_logo.com"
    }
```

- *Coloured Navigation Button* - Only navigation buttons whose title is `"Sign Up" || "Register" || "Donate to Support"`.

## Structure

1. *BaseElement*

### Functionality

1. Nav links once cliked will smooth scroll to sections on the page.
2. Redirect to page
3. Group pageGroup titles together under a given title.
4. Hide page titles
