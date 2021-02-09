import { newActionType } from 'redux-sputnik';

const prefix = '@dialog';

export const DialogActionTypes = {
    SHOW: newActionType(prefix, 'SHOW'),
    HIDE: newActionType(prefix, 'HIDE'),
};
