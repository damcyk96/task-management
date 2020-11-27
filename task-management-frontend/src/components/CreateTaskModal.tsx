import { Modal } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
    open: boolean;
    handleClose: () => void;
}

export default function CreateTaskModal({}: Props): ReactElement {
    return (
        <div>
            <Modal
            open={open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}
