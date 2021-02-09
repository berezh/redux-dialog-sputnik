import React from 'react';
import { useSelector } from 'react-redux';
import { DialogState } from '../redux/interfaces';

interface Props {
    name: string;
    children: (options: any) => React.ReactElement;
}

export const DialogWrapper: React.FC<Props> = ({ name, children }) => {
    const options = useSelector((x: { dialog: DialogState }) => x.dialog[name]);
    return options ? children(options) : null;
};
