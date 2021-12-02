import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignIn.styles.scss';
import { signInWithGoogle } from '../../../Firebase/Firebase.utils';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email , password } = this.state;
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);

            this.setState({email:'', password:''}); 
        }
        catch(err){
            alert(err);
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name] : value
        });
    }

    render(){
      
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password </span>
            
            <form onSubmit={ this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange } label='Email' required />
               

                <FormInput name='password' type='password' value={this.state.password}  handleChange={this.handleChange } label='Password' required />
                
            <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGooglebutton >Sign In with Google</CustomButton>
            </div>
            </form>
            
            
            </div>
        )
    }
}

export default SignIn;