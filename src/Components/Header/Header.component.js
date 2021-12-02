import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { getAuth, signOut } from '@firebase/auth';
import { connect } from 'react-redux';
import CartIcon from '../Cart/CartIcon/CartIcon.comp';
import CartDropDown from '../Cart/CartDropDown/CartDropDown.comp';


const Header = ({ currentUser , hidden }) => {
    return (
        <div className='header'>
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                {
                    currentUser ? <h4>Hi, {currentUser.displayName}</h4>
                    : null
                }
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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown />
            }
            

        </div>
    )
}

const mapStateToProps = ({ user : { currentUser } , cart : { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
