import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Box,
    Grid,
    useTheme
} from '@mui/material';
import './form-styles/accordion-x.css'

import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import ExpandMoreIcon correctly
import EList from '../Elist.jsx';
import { withFormBase } from '../FormBase.jsx';

const AccordionX = ({ formObj, oe, title,feeds, service, pageGroups,submitForm,skipForm,getForm2, currentPageGroupName,_dialog,sectionSize }) => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme(); // Access the Material-UI theme
    const isDark = theme.palette.mode === "dark"; // Define isDark here

    
  const formRef = useRef(null);



    const toggleAccordion = () => {
        setExpanded(!expanded);
    };



    useEffect(() => {
        if (isDark) {
            // Set the icon stroke color for dark mode
            document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color', theme.palette.common.white); // Example color for dark mode
        } else {
            // Set the icon stroke color for light mode
            document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color', '#8E8E93'); // Example color for light mode
        }
    }, [isDark, theme.palette.common.white]);


    useEffect(() => {
        getForm2(formRef.current)
        if (feeds) {
          if(feeds && currentFeed!=0  && feeds.length > 1 ){
            setChecked(true)
            setActiveStep(currentFeed)
            
          }
    
          setCurrentSteps(feeds.map((section) => {  
          
            // Check if section[0] exists and has a _title property before accessing it
            return "" || "";
          }));
          
        }
      }, [feeds]);

    return (
        <form className='accordion-x' id="accordion-x-wrapper form" data-service={service} form-type="ACCORDION FORM"  ref={formRef}>

        <Box sx={{ marginBottom: '20px' }} id="accordion-x-wrapper">
            <Accordion expanded={expanded} onChange={toggleAccordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton edge="start">
                            <adaptive-ui-icon 
                                dataColor={isDark ? theme.palette.common.white : "#8E8E93"}
                                style={{ width: 24, height: 24 }} 
                                icon={formObj._icon || 'icons:MdInfo'}></adaptive-ui-icon>
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

                </AccordionDetails>
            </Accordion>
        </Box>
        </form>
    );
};

export default withFormBase(AccordionX);
