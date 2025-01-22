import React, { useRef, useEffect, useState } from 'react';
import { SerializableElement, Validation } from './core/serializable-element';
import { Logger } from './core/logger';

export const withFormBase = (WrappedComponent) => {
  return (props) => {
    const [submittable, setSubmittable] = useState([]); // State to store submittable elements
    const [loading,setLoading] = useState([])
    const formRef = useRef(null); // Reference for form elements

    const getForm = () => {
      return formRef.current || null;
    };

    
    const _findElements = () => {
      const formElement = getForm();
      const foundElements = [];
      
      if (formElement) {
        const nodes = formElement.querySelectorAll('.element-loader');

        // Helper function to check if a node has a specific property
        const hasSpecificProperty = (node, propertyName) => {
          return node[propertyName] !== undefined;
        };

        // Recursive function to dig through child nodes
        const findSpecificProperty = (childNode) => {

          if (childNode.shadowRoot) {
            foundElements.push(childNode);
            setSubmittable(prevState => [...prevState, childNode]);
          }

          // Loop through and process each child node recursively
          childNode.childNodes.forEach((nestedChild) => {
            // Check if the nestedChild has the specific property
            

            // Continue searching in deeper levels
            findSpecificProperty(nestedChild);
          });
        };

        nodes.forEach((node) => {

          // Start digging from the current node
          node.childNodes.forEach((childNode) => {
            findSpecificProperty(childNode);
          });
        });
      } else {
        console.warn('Form element not found');
      }
      
      return foundElements;
    };

    const _validate = () => {
      const elements = _findElements(); // Get the elements
      for (let i = 0; i < elements.length; i++) {
        const l = elements[i];
      
        
        if (l instanceof SerializableElement) {
          try {
            const validation = l.validate();

            if (validation instanceof Validation) {

              if (!validation.isValid) {
                
                // prefer elements invalid() implementation
                // over general class addition to loader
                try {
                  l.invalid(validation);
                } catch (e) {
                  Logger.i.error(e);
                  l.classList.add('invalid-e-l');
                }
                // Logger.i.error(loader, l);
                l.scrollIntoView({behavior: 'smooth', block: 'end'});
                return false;
              } else {
                try {
                  // return true

                  l.valid(validation);
                } catch (e) {
                  
                  Logger.i.error(e);
                  l.classList.remove('invalid-e-l');
                }
              }
            } else {
              Logger.i.alert(`[.validate] must return Validation - ${l.e.name} `);
            }
          } catch (e) {
            Logger.i.error(e);
            Logger.i.alert(e);
          }
        }
      }
    };

    const _addSerializedElement = (json, name, value) => {
      // If the name doesn't exist, add it. Otherw it to
      // an array,
      if (json[name] === undefined) {
        json[name] = value;
      } else {
        if (!Array.isArray(json[name])) {
          json[name] = [json[name]];
        }
        json[name].push(value);
      }
    }
    const _serialize  = async()=> {
      // Only elements that have a `name` and are not disabled are submittable.
      var elements = _findElements();
      var json = {};
      for (var i = 0; i < elements.length; i++) {
        const l = elements[i];
       
        // todo #204
        // implement a method SerializableElement.isSerializable()
        // can be used to override is Serializable status
        // i.e datalist being Serializable is set from details['selectable']
        if (l instanceof SerializableElement) {
          await Promise.resolve(l.getValue()).then(value => {
            // If value is an object, iterate the key value pairs
            if (!Array.isArray([value]) && typeof value === 'object') {
              // `value === null` should never happen
              Object.entries(value).forEach(([name, value]) => {
                _addSerializedElement(json, name, value);
              });
            } else {
              _addSerializedElement(json, l.getName(), value);
            }
          });
        }
      }
      return json;
    }


    return (
      <WrappedComponent
        {...props}
        _validate={_validate}
        getForm={getForm}
        formRef={formRef}
        submittable={submittable} // Pass the submittable elements as props if needed
      />
    );
  };
};
