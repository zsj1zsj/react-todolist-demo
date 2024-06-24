import { TOGGLE_FORM } from "../actions/formActions";

const initialState = {
    visible: 'hidden'
};

const formReducer =  (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_FORM:
            return {
                ...state,
                visible: state.visible==='hidden'? 'visible':'hidden'
            }
        default:
            return state;
    }
};

export default formReducer;