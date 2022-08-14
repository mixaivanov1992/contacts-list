import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { addContact } from '@store/reducer/contactReducer';
import { useCheckContactExist } from '@hooks/useCheckContactExist';

interface Props {
    openDialog: (header: string, content: string) => void
}

const AddContact: React.FC<Props> = (props) => {
    const { openDialog } = props;
    const dispatch = useDispatch();
    const contacts = useTypedSelector((state) => state.contactReducer);
    const [newContact, setNewContact] = useState('');
 
    const onClickAddNewContact = (): void => {
        if(useCheckContactExist(contacts, newContact)){
            openDialog('Информация', 'Контакт уже существует');
        }else{
            dispatch(addContact(newContact.trim()));
            setNewContact('');
        }
    }

    return (
        <div className='contact-add'>
            <TextField onChange={(e)=>{setNewContact(e.currentTarget.value)}} id="newContact" label="Введите данные" variant="outlined" value={newContact}/>
            <div>
                {newContact ?
                    <Button onClick={onClickAddNewContact} variant="contained">Добавить контакт</Button>:
                    <Button variant="contained" disabled>Добавить контакт</Button>
                }
            </div>
        </div>
    );
}


export default AddContact;