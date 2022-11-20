import { DialogPayload } from './interfaces';
import { DialogActionTypes } from './types';

function newAction<T>(type: any, payload?: T): any {
    return {
            type,
            payload,
        };
}

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
