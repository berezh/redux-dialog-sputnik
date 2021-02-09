import { newReducer } from 'redux-sputnik';
import { DialogActionTypes } from './types';
import { DialogPayload, DialogState } from './interfaces';

const INITIAL_STATE: DialogState = {};

export const dialogReducer = newReducer(INITIAL_STATE, {
    [DialogActionTypes.SHOW]: (state, { name, options }: DialogPayload) => {
        state[name] = options;
        return {
            ...state,
        };
    },
});
