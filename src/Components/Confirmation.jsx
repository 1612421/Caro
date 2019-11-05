import React from 'react';

import { Modal, Button } from 'react-bootstrap'
import { confirmable } from 'react-confirm';

const Confirmation = (props) => {
    const {
        okLabel = 'OK',
        cancelLabel = 'Cancel',
        title,
        confirmation,
        show,
        proceed,
        dismiss,
        cancel,
        enableEscape = true,
    } = props;

    return (
        <div className="static-modal">
            <Modal show={show} onHide={dismiss} backdrop={enableEscape ? true : 'static'} keyboard={enableEscape}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {confirmation}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger pl-4 pr-4' onClick={cancel}>{cancelLabel}</Button>
                    <Button className='btn btn-success pl-4 pr-4' onClick={proceed}>{okLabel}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default confirmable(Confirmation);