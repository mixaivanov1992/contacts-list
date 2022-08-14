import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import AddContact from '@components/Contacts/AddContact/AddContact';
import ContactsList from '@components/Contacts/ContactsList/ContactsList';
import Dialog from '@components/Dialog/Dialog';
import { useDispatch } from 'react-redux';
import { removeContact } from '@store/reducer/contactReducer';
import './styles.css'

const Contacts: React.FC = () => {
    const dispatch = useDispatch();
    const [activeSearchValue, setActiveSearchValue] = useState('');
    const [enteredSearchValue, setEnteredSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [removeElement, setRemoveElement] = useState('');

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setActiveSearchValue(enteredSearchValue);
        }, 400);

        return () => {clearTimeout(handler)};

    }, [enteredSearchValue])

    
    const performAction = () => {
        dispatch(removeContact(removeElement));
        closeDialog();
    }

    const confirmRemove = (header: string, content: string, uid: string) => {
        setRemoveElement(uid);
        openDialog(header, content);
    }

    const openDialog = (header: string, content: string) => {
        setHeader(header);
        setContent(content);
        setIsOpen(true);
    }

    const closeDialog = () => {
        setHeader('');
        setContent('');
        setIsOpen(false);
    }

    return (
        <>
            <div className='contact'>
                <div className='contact-wrapper'>
                    <div className='contact-search'>
                        <TextField onChange={(e)=>{setEnteredSearchValue(e.currentTarget.value)}} id="search" label="Поиск контактов" variant="outlined" value={enteredSearchValue} />
                    </div>
                    <AddContact openDialog={openDialog} />
                    <ContactsList search={activeSearchValue} confirmRemove={confirmRemove} openDialog={openDialog} />
                </div>
            </div>
            <Dialog header={header} content={content} isOpen={isOpen} closeDialog={closeDialog} performAction={removeElement && performAction || null}/>
        </>
    );
}


export default Contacts;