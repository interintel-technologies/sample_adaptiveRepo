# REDIRECT ELEMENT

![Redirect Element](https://i.postimg.cc/rpkkWVLp/redirect.png)

## Description
A card element that display an alternative of two links to redirect the user to two different destinations.

## Configuration
- **Card description** - This comes from the page input name / name of the element e.g `Do you have an account?` , 
- **Card gateway logo** -This comes from the *details* object of the element, accesed with the key *logo* e.g. `{"logo":"https:gateway_logo.png"}`
- **Link 1** - Gotten from the *defaultValue* separated with a  | character where the left side of the character will be the name of the link and the right side is the destination link. e.g  `Login Here|https://nenasasa.com/login` 
- **Link 2** - Gotten from the *kind* separated with a  | character where the left side of the character will be the name of the link and the right side is the destination link. e.g  `Register Here|https://nenasasa.com/register` 



## Structure
**BaseElement**
### Mixins 
N/A

### Core
N/A

### Functionality
1.	Display two alternative links to redirect a user.

