# CONFIRM BOX

![Confirm Box](https://i.postimg.cc/Sxbtc1F5/confirmbox.png)

## Description
A *confirm box* is a type of dialog box that is used to prompt the user to confirm an action before it is executed. When the confirm box appears, the user is presented with two options: OK and Cancel, and sometimes an extra button. The user can choose to either confirm the action by clicking OK or cancel it by clicking Cancel.

## Properties
The ConfirmBox component has the following properties:

1. *title* (type: String): The title to be displayed in the modal dialog box. e.g `Delete this item?`
2. *buttons* (type: Array): an array of objects that make up the buttons with the following properties `label`, `color`, and a `callback` function for functionality whereby there exists a button for accepting and another for rejecting e.g    

    ` [{ label: 'Yes', color: 'success', callback: () => {this.onRemoveItemFromCartClickHandler(id) ; this.closeModal()} }, { label: 'No', color: 'danger', callback: () => {this.closeModal() }}]`;
3. *content* (type: String) : The subtitle or additional message to be displayed in the modal dialog box. e.g `this action cannot be undone`  

## Configuration
The confirm box is setup by creating a new instance in the following way:
`const confirmbox = new ConfirmBox();` such that it can be used globally.

- Confirm box is opened through the `openModal` function:   
 
  ```
      const confirmBox = new ConfirmBox({
                title: 'Remove item from Cart',
                content: 'Are you sure you want to remove item from cart',
                buttons: [{ label: 'Yes', color: 'success', callback: () => {this.onRemoveItemFromCartClickHandler(id) ; this.closeModal()} }, { label: 'No', color: 'danger', callback: () => {this.closeModal() }}]
            });
            confirmBox.openModal();
    ```
- it is closed through the `closeModal` function:  
  
  ```   
         closeModal() {
          const confirmBox = new ConfirmBox();
          confirmBox.closeModal();
        }
  ```