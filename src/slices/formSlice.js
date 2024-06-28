import { createSlice } from '@reduxjs/toolkit';
import { TOGGLE_FORM } from '../actions/formActions';

//todo: 改了之后就无效了， 暂时先不管了。未来再研究。
const initialState = {
    visible: 'hidden',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        [TOGGLE_FORM]: (state) => {
            state.visible = state.visible === 'hidden' ? 'visible' : 'hidden';
        },
    },
});

export const { [TOGGLE_FORM]: toggleForm } = formSlice.actions;
export default formSlice.reducer;