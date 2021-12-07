const INITIAL_STATE = {
    provideContact : true
}

const contactReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case 'TOGGLE_CONTACT':
            return{
                ...state,
                provideContact : !state.provideContact
            };
        
        default:
            return state;
    }
}

export default contactReducer;