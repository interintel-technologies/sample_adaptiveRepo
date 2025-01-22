import {
    Typography,
    Grid,
    useTheme,
    Card
} from '@mui/material';
import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import ExpandMoreIcon correctly
import ElementLoader from '../ElementLoader.jsx';

const PosForm = ({ formObj, oe, title, onSubmit, subtitle, textAlign, service, pageGroups, currentPageGroupName,sectionSize }) => {
    const [expanded, setExpanded] = useState(false);
    const [areBothElementsPresent, setareBothElementsPresent] = useState(false);
    const [cartEditor, setCartEditor] = useState(oe.find(element=>(element.elementJson[1]).toLowerCase().includes("cart editor")));
    const [productsGrid2, setproductsGrid2] = useState(oe.find(element=>(element.elementJson[1]).toLowerCase().includes("products grid 2")));
    const [submitElement, setsubmitElement] = useState(oe.find(element=>(element.elementJson[1]).toLowerCase().includes("submit")));

    
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);
    const theme = useTheme(); // Access the Material-UI theme
    const isDark = theme.palette.mode === "dark"; // Define isDark here

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    // Function to serialize the form data
    const serializeForm = (form) => {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        return data;
    };

    // Function to validate form data
    const validate = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (cartEditor && productsGrid2) {
            this.areBothElementsPresent = true;
            
            // Store the presence in local storage
            localStorage.setItem('areBothElementsPresent', 'true');

            let newElementJson = [...cartEditor._elementJson];
            newElementJson[7] = '12|12|12';
            cartEditor._elementJson = newElementJson;
        
            let newElementJson2 = [...productsGrid2._elementJson];
            newElementJson2[7] = '12|12|12';
            productsGrid2._elementJson = newElementJson2;
         
            let newElementJson3 = [...submitElement._elementJson];
            newElementJson3[7] = '12|12|12';
            submitElement._elementJson = newElementJson3;
            // submitElement.css({"position":"absolute",
            //     "bottom": 0,
            //     "width": "50%",
            //     "right": 0})

            const elistBody=this.qs('slot[name="body"]');
      

           const sub =this.oe[2]

        //    sub.styles="position:absolute !important;";
        //    sub.styles.setProperty('position', 'absolute', 'important');

           const ad=document.querySelector('adaptive-ui');
            const template=ad.shadowRoot.querySelector('.template');
       
            const templatePage=template.querySelector('service-page') || template.querySelector('landing-page');
            const page=templatePage.shadowRoot.querySelector('.page');
            const body=page.querySelector('.body') || page;
            const formRender=body.querySelector('form-render')
      
            const form=formRender.shadowRoot.querySelector('#form');
           
            const eList=form.querySelector('e-list');
 
        const elistColumns=eList.shadowRoot.querySelector('.columns');
 
          
        } else {
            setareBothElementsPresent(false);
            localStorage.setItem('areBothElementsPresent', 'false');
        }
    }, []);

    // Handle changes in form fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle the custom submit event from LitElement button
    useEffect(() => {
        const formElement = formRef.current;

        const handleCustomSubmit = (event) => {
            const serializedData = serializeForm(formElement);
            if (validate()) {
                onSubmit(serializedData);
            }
        };

        const handleCustomEvent = (event) => {
            if (event.detail && event.detail.action === 'submit') {
                handleCustomSubmit(event);
            }
        };

        // Add event listener for custom events from LitElement
        window.addEventListener('submit-button-click', handleCustomEvent);

        return () => {
            window.removeEventListener('submit-button-click', handleCustomEvent);
        };
    }, [onSubmit]);

    useEffect(() => {
        if (isDark) {
            // Set the icon stroke color for dark mode
            document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color', theme.palette.common.white); // Example color for dark mode
        } else {
            // Set the icon stroke color for light mode
            document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color', '#8E8E93'); // Example color for light mode
        }
    }, [isDark, theme.palette.common.white]);

    return (
        <Card className='form-x-container'>
    <div class="form-title">
    <Typography
      variant="h5" 
      className="mb-0"
      style={{
        padding: '0.75rem', // Correct CSS syntax for padding
        position: 'relative' // Correct CSS syntax for position
      }}
    >
      {title}
    </Typography>   
    <p  className="mb-0" style={{textAlign:{textAlign}}}>{subtitle}</p>

            </div>   
        <div class="column p-0 column-left">
        <Grid container spacing={0}>
      {oe && oe.map((element, index) => {
        
        let gridProps;

        if (element.__7 === "12|12|12") {
          gridProps = { xs: 12, sm: 6 }; // Full width on mobile, half width on desktop
        } else if (element.__7 === "24|24|24") {
          gridProps = { xs: 12, sm: 12 }; // Full width on all viewports
        } else {
          gridProps = { xs: 12 }; // Default to full width
        }

        return (
          <Grid item key={index} {...gridProps}>
            <div className="element-loader">
              <ElementLoader currentPageGroupName={currentPageGroupName} pageGroups={pageGroups} element={element} onChange={handleChange} />
            </div>
          </Grid>
        );
      })}
    </Grid>      
        </div>
        </Card>
        
    );
};

export default PosForm;
