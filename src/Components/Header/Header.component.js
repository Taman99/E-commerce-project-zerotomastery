import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';


export default function Header() {
    return (
        <div className='header'>
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
            </div>

        </div>
    )
}
