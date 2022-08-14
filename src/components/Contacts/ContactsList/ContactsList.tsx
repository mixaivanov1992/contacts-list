import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { removeContact, editContact } from '@store/reducer/contactReducer';
import { Contact } from '@store/models/contactReducer';
import { useCheckContactExist } from '@hooks/useCheckContactExist';

interface Props {
    search: string,
    confirmRemove: (header: string, content: string, uid: string) => void,
    openDialog: (header: string, content: string) => void
}

const ContactsList: React.FC<Props> = (props) => {
    const { search, confirmRemove, openDialog } = props;
    const dispatch = useDispatch();
    const contacts = useTypedSelector((state) => state.contactReducer.filter((item) => item.name.includes(search)));

    const [label, setLabel] = useState<Contact>({name: '', uid: ''});

    const onChangeContact = (uid: string, name: string) => {
        dispatch(editContact({name, uid}))
    }

    const outBlurContact = (uid: string, name: string) => {
        if(!name){
            dispatch(removeContact(uid));
        }else if(useCheckContactExist(contacts, name, uid)){
            dispatch(editContact(label));
            openDialog('Информация', 'Контакт уже существует');
        }
        setLabel({name: '', uid: ''});
    }

    const onClickRemoveContact = (uid: string) => {
        confirmRemove('Удаление контакта', 'Вы действительно хотите удалить контакт?', uid);
    }

    return (
        <div className='contact-list'>
            <div className='contact-list_header'>{contacts.length?'Список контактов':'Список контактов пуст'}</div>
            {
                contacts.map((item)=>{
                    return(
                        <div className='contact-list_wrapper' key={item.uid}>
                            <TextField
                                onFocus={()=>setLabel({name: item.name, uid: item.uid})}
                                onBlur={(e)=>outBlurContact(item.uid, e.currentTarget.value)}
                                onChange={(e)=>{onChangeContact(item.uid, e.currentTarget.value)}}
                                id="newContact"
                                variant="outlined"
                                label={item.uid === label.uid?label.name:''}
                                value={item.name}
                            />
                            <DeleteIcon onClick={()=>{onClickRemoveContact(item.uid)}}/>
                        </div>
                    );
                })
            }
        </div>
    );
}


export default ContactsList;