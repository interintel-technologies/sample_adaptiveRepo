# INDUSTRIES CATEGORIES

![industries categories](https://i.postimg.cc/TP7TFYxB/Screenshot-2024-09-05-163308.png)

## Description
Displaying industries categories
The categories items are loaded from the **DATASOURCE**
It allows a user to select an industry class by narrowing down from the 
Section -> Group -> Division -> Class

the datalist is of type function under primary.core.administration -> industries_categories 
> todo reference switch
 

## Configuration
- datasource dataname defaultValue, 
- the required datasource response structure is DATA
- required, set min>0 or required to True

## Structure
**SerializableElement**
### Mixins 
- DataSourceMixin
- UtilsMixin

### Core
The list items are loaded via **DATASOURCE**.
> TODO add description on the dsc function response structure
or a link to the same on switch docs 

### Functionality 
1.	Should Provide an industry Section field, where it has its own list
    Selection of a section should activate the Group list to only show groups from the sections 
2.	Should Provide an industry Group field, where it has its own list
    Selection of a Group should activate the Division list to only show Divisions from the Group
3.	Should Provide an industry Division field, where it has its own list
    Selection of a Division should activate the Class list to only show Class from the Division
4.	Should Provide an industry Class field, where it has its own list
    The id of the class is the value returned
5.	When required and no Class has been Selected, it should be invalid

> TODO add 6.  the form name 
 

