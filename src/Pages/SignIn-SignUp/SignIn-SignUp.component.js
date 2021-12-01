import React from 'react'
import SignIn from '../../Components/SignInUpComponents/SignIn/SignIn.component'
import SignUp from '../../Components/SignInUpComponents/SignUp/SignUp.component'
import './SignInUp.styles.scss';

export default function SignIn_SignUp() {
    return (
        <div className='sign-in-and-sign-up'> Sign In    
        <SignIn />    
        <SignUp />   
        </div>
    )
}

