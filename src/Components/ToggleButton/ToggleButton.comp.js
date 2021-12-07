import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleContact } from '../../Redux/Contact/Contact.action';
import './ToggleButton.styles.scss';


const ToggleButton = ({ isButtonOn, toggleContact }) => {

    const [bgColor, setBgColor] = useState(
        isButtonOn ? 'blue' : '#acacb9'
    );
    const [translate, setTranslate] = useState(
        isButtonOn ? 'translateX(50px)' : 'translateX(0)'
    );


    const toggleButtonProperties = (e) => {
        toggleContact();
        if (isButtonOn == true) {
            setBgColor('#acacb9');
            setTranslate('translateX(0)');
        }
        else {

            setBgColor('blue');
            setTranslate('translateX(50px)');
        }
    }

    return (
        <div className='toggle-button' style={
            {
                backgroundColor: bgColor,
            }
        } onClick={e => toggleButtonProperties(e)}>
            <div className='ball' style={{
                transform: translate
            }}>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleContact: () => dispatch(toggleContact())
})

export default connect(null, mapDispatchToProps)(ToggleButton);