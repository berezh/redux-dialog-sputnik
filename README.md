# redux-dialog-wrapper

<a href="https://www.npmjs.com/package/redux-dialog-wrapper">
    <img src="https://nodei.co/npm/redux-dialog-wrapper.png?mini=true"/>
</a>

Dialog shown with redux action


[DEMO](https://varp.com/redux-dialog)

### Installation:

```
npm install redux-dialog-wrapper
```

### Set Up Reducer

```tsx
import { dialogReducer } from 'redux-dialog-wrapper';
import { combineReducers } from 'redux'
...
const reducer = combineReducers({
  ...reducers,
  dialog: dialogReducer,
})
```

### Wrap custom dialog

#### Material UI

```tsx
import { DialogWrapper } from 'redux-dialog-wrapper';
import Dialog from '@material-ui/core/Dialog';
...
export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {() => {
                return (
                    <Dialog open={true} ... >
                        ...
                    </Dialog>
                );
            }}
        </DialogWrapper>
    );
};
```

#### Bootstrap

```tsx
import { DialogWrapper } from 'redux-dialog-wrapper';
import { Modal } from 'react-bootstrap';
...
export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {() => {
                return (
                    <Modal show={true} ... >
                        ...
                    </Modal>
                );
            }}
        </DialogWrapper>
    );
};
```

#### Blueprintjs

```tsx
import { DialogWrapper } from 'redux-dialog-wrapper';
import { Dialog } from '@blueprintjs/core';
...
export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {() => {
                return (
                    <Dialog isOpen={true} ... >
                        ...
                    </Dialog>
                );
            }}
        </DialogWrapper>
    );
};
```

### Show

#### In component

```tsx
import { showDialog } from 'redux-dialog-wrapper';
import { MyDialog } from '../my-dialog';
import { useDispatch } from 'react-redux';
...
export const CustomComponent: React.FC = () => {
    const dispatch = useDispatch();

    const handleShow = useCallback(()=>{
        dispatch(showDialog('my-dialog-name'));
    }, []);

    return (
        <>
            <Button onClick={handleShow}>Show</Button>
            <MyDialog />
        </>
    );
};
```

#### In Redux Saga

```tsx
import { showDialog, hideDialog } from 'redux-dialog-wrapper';
...
function* mySagaMethod(): SagaIterator {
    ...
    yield put(showDialog('my-dialog-name'));
    ...
    yield put(hideDialog('my-dialog-name'));
}
```

### Pass Options to dialog body

#### Define interface

```tsx
export interface MyDialogOptions {
    title: string;
    message: string;
}
```

#### Define options

```tsx
const handleShow = useCallback(() => {
    dispatch(
        showDialog<MyDialogOptions>('my-dialog-name', {
            title: 'My Dialog',
            message: 'Content message text',
        }),
    );
}, []);
```

#### Use options inside dialog

```tsx
import { DialogWrapper } from 'redux-dialog-wrapper';
import { Modal } from 'react-bootstrap';
...
export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {(options: MyDialogOptions) => {
                return (
                    <Modal show={true} header ... >
                        <Modal.Header closeButton>
                            <Modal.Title>{options.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{options.message}</p>
                        </Modal.Body>
                        ...
                    </Modal>
                );
            }}
        </DialogWrapper>
    );
};
```
