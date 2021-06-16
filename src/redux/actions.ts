import { newAction } from 'redux-sputnik';

import { DialogPayload } from './interfaces';
import { DialogActionTypes } from './types';

export const showDialog = <TOptions = any>(name: string, options?: TOptions) =>
    newAction<DialogPayload>(DialogActionTypes.SHOW, {
        name,
        options: options ? options : {},
    });

export const hideDialog = (name: string) =>
    newAction<DialogPayload>(DialogActionTypes.SHOW, {
        name,
        options: undefined,
    });
