import { DialogActionTypes } from './types';
import { DialogPayload, DialogReduxState } from './interfaces';

const INITIAL_STATE: DialogReduxState = {};

interface ReducerMethods<TState, TPayload = any> {
    [actionType: string]: (state: TState, payload?: TPayload) => TState;
}

function newReducer<TState>(
    initialState: TState,
    reducerMethods: ReducerMethods<TState>,
): (state: TState, action: any) => TState {
    return function reducerFunction(
        state: TState = initialState,
        action: any = { type: '', payload: null },
    ): TState {
        if (action.type in reducerMethods) {
            return reducerMethods[action.type](state, action.payload);
        }
        return state;
    };
}


export const dialogReducer = newReducer(INITIAL_STATE, {
    [DialogActionTypes.SHOW]: (state, { name, options }: DialogPayload) => {
        state[name] = options;
        return {
            ...state,
        };
    },
});
