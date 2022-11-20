import { createReducer, createAction } from '@reduxjs/toolkit';

import { DialogReduxState, DialogNamePayload, DialogPayload } from './interfaces';

const createDialogAction = <T>(actionName: string) => createAction<T>(`dialog/${actionName}`);

const showDialogAction = createDialogAction<DialogPayload>('showDialog');

const hideDialogAction = createDialogAction<DialogNamePayload>('hideDialog');

export function showDialog<T>(name: string, options?: T) {
    return showDialogAction({ name, options });
}

export function hideDialog(name: string) {
    return hideDialogAction({ name });
}

const INITIAL_STATE: DialogReduxState = {};

export const dialogReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(showDialogAction, (state, { payload: { name, options } }) => {
        state[name] = options || {};
        return state;
    });
    builder.addCase(hideDialogAction, (state, { payload: { name } }) => {
        state[name] = undefined;
        return state;
    });
});
