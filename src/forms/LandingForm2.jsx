import React, { useEffect, useRef } from 'react';
import './form-styles/landing-form-2.css'
import { withFormBase } from '../FormBase';

const LandingForm3 = ({ title, subtitle, image }) => {
    const formContentRef = useRef(null);

    useEffect(() => {
        setFormContentBackground();
    }, []);

    const setFormContentBackground = () => {
        const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--app-default-color');
        const rgba = (hex, a) => {
            const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
            return `rgba(${r},${g},${b},${a})`;
        };
        if (formContentRef.current) {
            formContentRef.current.style.background = rgba(defaultColor, 0.16);
        }
    };

    return (
        <div id="hero-x-wrapper form">
   <div className="column content">
            <div className="hero-body">
                <div className="card-content form-content" ref={formContentRef}>
                    <div className="columns">
                        <div className="column is-4">
                            <div className="card-content">
                                <figure className="image is-16by9">
                                    <img src={image} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="column is-8">
                            <div className="card-content">
                                <h3>{title}</h3>
                                <h6>{subtitle}</h6>
                                <div className="slot-body">
                                    {/* Slot content can be inserted here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     
    );
};

export default withFormBase(LandingForm3);
