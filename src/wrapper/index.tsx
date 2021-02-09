import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { DialogReduxState } from '../redux/interfaces';

interface Props {
    name: string;
    children: (options: any) => React.ReactElement;
}

const DialogWrapperComponent: React.FC<Props> = ({ name, children }) => {
    const options = useSelector(
        (x: { dialog: DialogReduxState }) => x.dialog[name],
    );
    return options ? children(options) : null;
};

export const DialogWrapper = memo(DialogWrapperComponent);
