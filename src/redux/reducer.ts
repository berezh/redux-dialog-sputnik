import { createReducer } from '@reduxjs/toolkit';

import { DialogReduxState } from './interfaces';
import { hideDialog, showDialog } from './actions';

const INITIAL_STATE: DialogReduxState = {};

export const dialogReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(showDialog, (state, { payload: { name, options } }) => {
        state[name] = options;
        return state;
    });
    builder.addCase(hideDialog, (state, { payload: { name } }) => {
        state[name] = undefined;
        return state;
    });
});
