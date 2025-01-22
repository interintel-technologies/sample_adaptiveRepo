import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ElementLoader from '../ElementLoader';
import './form-styles/invoice-form.css'
import { withFormBase } from '../FormBase';

const InvoiceForm = ({ sections,pos,setPos,title, details, oe,currentPageGroupName,pageGroups , setPageSections,service,updateParentState,sectionSize }) => {
    const [isPaid, setIsPaid] = useState(details.isPaid || false);
    const [socialLinks, setSocialLinks] = useState(details.socialLinks || []);
    const [invoiceNo, setInvoiceNo] = useState(details.invoiceNo || " ");
    const [invoiceDate, setInvoiceDate] = useState(details.invoiceDate || " ");
    const [recipient, setRecipient] = useState(details.recipient || {});
    const [sender, setSender] = useState(details.sender || {});
    const [text, setText] = useState(details.text || " ");
    const [bgImage, setBgImage] = useState("https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png");
    
    const getBgImage = () => {
        const defaultLink = 'https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png';
        return bgImage && bgImage !== '' ? bgImage : defaultLink;
    };

    const checkLink = (e) => {
        const link = e.target.getAttribute('href');
        if (!link) {
            e.preventDefault();
        }
    };

    const getHref = (text) => {
        if (text.includes('|')) {
            const [, link] = text.split('|');
            return link;
        }
        return '';
    };

    const getLinkTitle = (text) => {
        if (text.includes('|')) {
            const [title] = text.split('|');
            return title;
        }
        return text;
    };

    const onMakePaymentBtnClickHandler = () => {
      console.log("make payment ");
      
    };

    return (
        <section id="invoiceForm">
            <header className="is-flex">
                <img src={getBgImage()} alt="gateway-logo" className="success-form-logo" />
                <div className="invoice-header content">
                    <div className="block">
                        <h2>Invoice</h2>
                        <span className="invoice-details">
                            <strong><h4>Invoice No.</h4></strong>
                            <h4>{invoiceNo}</h4>
                        </span>
                        <span className="invoice-details">
                            <strong><h4>Invoice Date.</h4></strong>
                            <h4>{invoiceDate}</h4>
                        </span>
                    </div>
                    <div className="block" style={{ marginTop: '44px' }}>
                        <span>
                            {Object.keys(sender).map(key => (
                                <h4 key={key}>{sender[key]}</h4>
                            ))}
                        </span>
                    </div>
                </div>
            </header>
            <hr />
            <section>
                <div className="content">
                    <h2>Recipient</h2>
                    {Object.keys(recipient).map(key => (
                        <h4 key={key}>{recipient[key]}</h4>
                    ))}
                </div>
            </section>
            <hr />
           
            

            <Grid container spacing={2}>
            {oe && oe.map((element, index) => {
              let gridProps;
              if (element.__7 === "12|12|12") {
                gridProps = { xs: 12, sm: 6 };
              } else if (element.__7 === "24|24|24") {
                gridProps = { xs: 12, sm: 12 };
              } else {
                gridProps = { xs: 12 };
              }
              return (
                <Grid item key={index} {...gridProps}>
                  <ElementLoader
                    currentPageGroupName={currentPageGroupName}
                    pageGroups={pageGroups}
                    element={element}
                    onChange={handleChange}
                  />
                </Grid>
              );
            })}
          </Grid>
<hr />
            {!isPaid && (
                <div id="makePayment" className="is-flex">
                    <button className="button" onClick={onMakePaymentBtnClickHandler}>Make Payment</button>
                </div>
            )}
            <hr />
            <footer className="footer">
                <div className="content">
                    <p>{text}</p>
                </div>
                <hr />
                <div className="is-flex">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            className="ii__footer-col-link"
                            rel="noopener"
                            href={getHref(link)}
                            onClick={checkLink}
                            target="_blank"
                        >
                            <i className={`fab fa-${getLinkTitle(link)}`} style={{ color: 'var(--app-secondary-color)', fontSize: '20px' }}></i>
                        </a>
                    ))}
                </div>
            </footer>
            {!isPaid && (
                <div className="unpaid is-flex">
                    <h2 className="title is-4">Unpaid</h2>
                </div>
            )}
        </section>
    );
};


export default withFormBase(InvoiceForm);
