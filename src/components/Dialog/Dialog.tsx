import React from 'react';
import { Modal, Button } from '@mui/material';
import './styles.css'

interface Props {
    header: string,
    content: string,
    isOpen: boolean,
    performAction: null | (() => void),
    closeDialog: () => void
}

const Dialog: React.FC<Props> = (props) => {
    const { header, content, isOpen, performAction, closeDialog } = props;
    return (
        <>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='dialog'>
                    <div className='dialog-wrapper'>
                        <div className='dialog-header'>{header}</div>
                        <div className='dialog-content'>{content}</div>
                        <div className='dialog-footer'>
                            {performAction && <Button onClick={performAction} variant="contained">Подтвердить</Button>}
                            <Button onClick={closeDialog}>Закрыть</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}


export default Dialog;