import React from 'react';
import './CustomButton.styles.scss';

export default function CustomButton({ children , isGooglebutton , inverted , ...otherProps }) {
    return (
       <button className={`${inverted ? 'inverted' : '' } ${isGooglebutton ? 'google-button' : '' } custom-button`} {...otherProps}>
           {children}
       </button>
    )
}
