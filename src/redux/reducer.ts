import { newReducer } from 'redux-sputnik';

import { DialogActionTypes } from './types';
import { DialogPayload, DialogReduxState } from './interfaces';

const INITIAL_STATE: DialogReduxState = {};

export const dialogReducer = newReducer(INITIAL_STATE, {
    [DialogActionTypes.SHOW]: (state, { name, options }: DialogPayload) => {
        state[name] = options;
        return {
            ...state,
        };
    },
});
