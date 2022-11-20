import { createAction } from '@reduxjs/toolkit';

import { DialogPayload } from './interfaces';

const createDialogAction = <T>(actionName: string) => createAction<T>(`dialog/${actionName}`);

export const showDialog = createDialogAction<DialogPayload>('showDialog');

export const hideDialog = createDialogAction<Omit<DialogPayload, 'options'>>('showDialog');
