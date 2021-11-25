import React from 'react';
import './CustomButton.styles.scss';

export default function CustomButton({ children , isGooglebutton , ...otherProps }) {
    return (
       <button className={`${isGooglebutton ? 'google-button' : '' } custom-button`} {...otherProps}>
           {children}
       </button>
    )
}
