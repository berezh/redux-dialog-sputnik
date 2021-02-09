# dialog-redux

Redux dialog stuff

<a href="https://www.npmjs.com/package/dialog-redux">
    <img src="https://nodei.co/npm/dialog-redux.png?mini=true"/>
</a>

## Usage

### Installation:

```
npm install dialog-redux
```

### Attach reducer to redux

```tsx
import { dialogReducer } from 'dialog-redux';
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
import { DialogWrapper } from 'dialog-redux';
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
import { DialogWrapper } from 'dialog-redux';
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
import { DialogWrapper } from 'dialog-redux';
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
import { showDialog } from 'dialog-redux';
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
import { showDialog, hideDialog } from 'dialog-redux';
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
import { DialogWrapper } from 'dialog-redux';
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
