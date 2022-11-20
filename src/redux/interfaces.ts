export interface DialogNamePayload {
    name: string;
}

export interface DialogPayload extends DialogNamePayload {
    options?: any;
}

export interface DialogReduxState {
    [key: string]: any;
}
