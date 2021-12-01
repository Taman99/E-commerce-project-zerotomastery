import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { Component } from 'react';
import { createUserProfileDocumentInFirestore } from '../../../Firebase/Firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignUp.styles.scss';

export default class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        try{
            const {user} = await createUserWithEmailAndPassword(getAuth(), email, password);

            await createUserProfileDocumentInFirestore(user , { displayName });
            
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
            
            
        }
        catch(err){
            console.error(err);
        }
    }

    handleChange = (e) => {
        const {name, value } = e.target;

        this.setState({
            [name] : value
        });
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
       
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}
