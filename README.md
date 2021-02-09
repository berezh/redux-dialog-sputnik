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

```jsx
import { dialogReducer } from 'dialog-redux';
...
import { combineReducers } from 'redux'
...

const reducer = combineReducers({
  ...reducers,
  dialog: dialogReducer,
})
```

### Wrap custom dialog

#### Material UI

```jsx
import { DialogWrapper } from 'dialog-redux';
...
import Dialog from '@material-ui/core/Dialog';
...

export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {() => {
                return (
                    <Dialog open={true} ... >
                        ...
                    </Modal>
                );
            }}
        </DialogWrapper>
    );
};
```

#### Bootstrap

```jsx
import { DialogWrapper } from 'dialog-redux';
...
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

```jsx
import { DialogWrapper } from 'dialog-redux';
...
import { Dialog } from '@blueprintjs/core';
...

export const MyDialog: React.FC = () => {
    return (
        <DialogWrapper name="my-dialog-name">
            {() => {
                return (
                    <Dialog isOpen={true} ... >
                        ...
                    </Modal>
                );
            }}
        </DialogWrapper>
    );
};

```

### Show

#### In component

```jsx
import { showDialog } from 'dialog-redux';
...
import { MyDialog } from '../my-dialog';
...

export const CustomComponent: React.FC = () => {
    const handleShow = useCallback(()=>{
        showDialog('my-dialog-name');
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

```jsx
import { showDialog, hideDialog } from 'dialog-redux';
...

function* mySagaMethod(): SagaIterator {
    ...
    yield put(showDialog('my-dialog-name'));
    ...
    yield put(hideDialog('my-dialog-name'));
}

```
