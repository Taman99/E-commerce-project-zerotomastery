import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { getAuth, signOut } from '@firebase/auth';


export default function Header({ currentUser }) {
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
                {
                    currentUser ?
                        <div className='option' onClick={() => signOut(getAuth())}>
                            Sign Out
                        </div>
                        :
                        <Link to='/signin' className='option'>
                            Sign In
                        </Link>
                }
            </div>

        </div>
    )
}
