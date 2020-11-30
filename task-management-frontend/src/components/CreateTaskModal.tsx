import { makeStyles, Modal } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
    open: boolean;
    handleClose: () => void;
}

const [modalStyle] = React.useState(getModalStyle);
const [open, setOpen] = React.useState(false);
const classes = useStyles();

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid black",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
}));

const body = (
    <div style={modalStyle} classname={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
            Duis mollis, es non commodo luctus
        </p>
    </div>
);

export default function CreateTaskModal({}: Props): ReactElement {
    return (
        <div>
            <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}
