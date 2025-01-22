# DESCRIPTION BOX

## Description
Used to display content that has TITLE,SUBTITLE,DESCRIPTION and IMAGE
The items are loaded from the **DATASOURCE**

## Configuration
- *TITLE* - Gotten from `name` column in the dsc by a sepatarion of a pipe eg. `start now|InterIntel,` start now is `title`

 - *SUBTITLE* -   Gotten from `name` column in the dsc by a sepatarion of a pipe eg. `start now|InterIntel,`InterIntel  is `subtitle`  

- *DESCRIPTION* -   Gotten from `description` column in the dsc.

- *IMAGE* -   Gotten from `image` column in the dsc.


                                                                                                                        



## Structure
**SectionPElementDsc**

### Mixins 
- DataSourceMixin
- UtilsMixin
   


### Functionality
1.	When the title and subtile div is clicked it displays its description and Image on the left.


