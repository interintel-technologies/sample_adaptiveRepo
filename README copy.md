# Adaptive-Ui Web 3.0
Bulit with react and Lit element

## React 

Will be the foundation for our application. It will manage the overall structure, routing, and layout logic especially on the different template component structures.We also material ui theme providers and state management for themeing purposes across

## Lit 

For specific page input components within your React application. Lit's lightweight nature and web component approach can provide performance benefits for these isolated components. Additionally, We will leverages Shadow DOM for styling the page inputs, potentially reducing conflicts with React's CSS-in-JS solutions.The custom events and data from lit input elements, will trickle up to the wrapper container


## Setup

1. Installing dependencies

   ```bash
    yarn install
   ```

2. Starting the development server

   ```bash
    yarn dev
   ```

## Folder Structure

   ```text

   ```


## Configuration

- Configured using `environment.js` file.
in the environment file, settings that are set include:

   1. Theme - `window.THEME` used to set a specific theme which are: `looper,bulkit, dsv1.0, dsv2.0`
   2. Template - `window.TEMPLATE` used to set a specific template which include: `service,landing,payments,canvas,section`
   3. Service_payload - an object that sets  up the initial interface payload. Pagegroups, pages, forms and elements to be shown are set up here
   4. Datasource_payload - Used to set up a data source for the element/elements set in the service payload. Uses JSON in a row/column format to define data that is rendered in the UI.
   5. Element - An element or page_input is a component that has its unique UI and functionality. each element in the form of an array has 14 elements:
      ``
      1. Page Input Name - Title of the element that is rendered as a heading.
      2. Element/variable Type - type of element e.g `tile element`. each word in the element should be spaced.
      3. Min-number - minimum range that the element may use
      4. Max-number - maximum range that the element may use
      5. Element Name - name of element eg `tag_input_form_name`
      6. Default Value - default value of the element
      7. Icon - used to set aspecific icon that will be rendered in the element UI e.g `icons:input`
      8. Section size - used to determine the column width of the element. ranges from 0-24 e.g `12|12|12` for half-width and `24|24|24` for full-width
      9. Kind -
      10. Required - Boolean that determines whether an element is required or not. default is 'true'
      11. Style - used to define style.
      12. Service / Data Source - service name is set here.
      13. Element Height / Bind Position - height/bind position of the element
      14. Details - A key-value object that is used to configure extra details that an element may need that is not included in it's datasource_payload.
      ``

- Multiple elements can be setup in the service_payload.

# dsv3.0
A project implemented through integrating Lit-Element with React


## Build Deployment
run yarn build


## GRID SYSTEM

The grid system is central to this component, determining how the elements are laid out on different screen sizes (mobile, tablet, desktop). There are two distinct grid systems in this component based on the presence or absence of window.NEWSECTIONSIZE:

Old Grid System (When window.NEWSECTIONSIZE is not defined):

This system is used when window.NEWSECTIONSIZE is falsy or undefined.
Elements are laid out based on values in the string element.__7, which contains size information formatted as row|column|span.
If element.__7 contains certain specific values like "24", "12", "8", "6", the grid assigns predefined sizes based on Material-UI's xs (extra small) and sm (small) breakpoints.
If the value does not match those predefined sizes, the system falls back to handling grid position using CSS grid properties. Specifically, it parses row, column, and span from element.__7 and uses them to define custom positions using gridRow, gridColumnStart, and gridColumnEnd CSS properties.
New Grid System (When window.NEWSECTIONSIZE is true):

This system is more dynamic and fine-tuned for mobile (small), tablet (tablet), and desktop (desktop) screen sizes.
It also parses values from element.__7, which is expected to contain three numbers representing sizes for small, medium, and large screen sizes, respectively.
The grid sizing is defined for three breakpoints:
xs: Represents the layout for mobile screens.
sm: Represents the layout for tablet screens.
md: Represents the layout for desktop screens.
The parsed numbers from element.__7 determine the grid's size and layout on different devices.
Old Grid System (Without window.NEWSECTIONSIZE)
Predefined Size Logic:

When the first value of element.__7 equals "24", "12", "8", or "6", the component assigns specific grid sizes for small screens (xs) and medium screens (sm):
24: Full-width grid (12 columns in Material-UI terms).
12: Half-width grid (6 columns).
8: One-third width grid (4 columns).
6: One-quarter width grid (3 columns).
Custom Grid Logic for CSS Grid:

For non-predefined values, the system parses the values into a row, column, and span (from element.__7).
These values are used to define the position and width of the element using CSS Grid properties:
gridRow: Defines the element's position in a row.
gridColumnStart: Defines the starting column for the element.
gridColumnEnd: Defines how many columns the element spans.
Example: gridRow: 1, gridColumnStart: 2, gridColumnEnd: span 4 means the element will start at the second column, spanning across four columns.
New Grid System (With window.NEWSECTIONSIZE)
Parsing Grid Values:

element.__7 contains three numbers representing sizes for mobile (small), tablet, and desktop screens.
The sizes are interpreted as follows:
small: Defines the grid size for mobile screens (xs breakpoint in Material-UI).
tablet: Defines the grid size for tablet screens (sm breakpoint).
desktop: Defines the grid size for desktop screens (md breakpoint).
Mapping Sizes:

The component calculates the grid size for each screen size based on the values parsed:
If the size is 24, it spans the full width (12 columns).
If the size is 12, it spans half the width (6 columns).
If the size is 8, it spans one-third of the width (4 columns).
If the size is 6, it spans one-quarter of the width (3 columns).
Adjustment for Each Screen:

For each breakpoint (xs, sm, md), the component adjusts the grid size based on the parsed values from element.__7.
For example:
If the small value is 12, the grid width will be half of the available width on mobile devices.
If the tablet value is 8, the grid width will be one-third of the available width on tablet devices.
If the desktop value is 24, the grid will span the full width on desktop screens.
Grid System Summary
Old Grid System (Without window.NEWSECTIONSIZE):

Relies on specific values (24, 12, 8, 6) to assign fixed grid widths for small and medium breakpoints.
Uses a fallback mechanism for custom positioning via CSS Grid when values do not match the predefined ones.
New Grid System (With window.NEWSECTIONSIZE):

Dynamically adjusts grid sizes for three breakpoints: small (mobile), medium (tablet), and large (desktop).
Sizes are calculated from element.__7 and mapped to xs, sm, and md breakpoints.
Provides more granular control over grid layouts on different device sizes.
This dual-grid system enables the component to handle both legacy layout configurations and newer, more flexible responsive layouts with greater precision across different devices.
