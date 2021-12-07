import React from 'react';
import { connect } from 'react-redux';
import ToggleButton from '../../Components/ToggleButton/ToggleButton.comp';
import './Contact.styles.scss';

const Contact = ({ provideContact }) => {



    return (
        <div className='form-group'>
            <label className='form-label'>Provide Contact : {provideContact ? 'Yes' : 'No'}</label>
           
                <ToggleButton isButtonOn={provideContact} />

        </div>
    )
}

const mapStateToProps = ({ contact: { provideContact } }) => ({
    provideContact
})

export default connect(mapStateToProps)(Contact);