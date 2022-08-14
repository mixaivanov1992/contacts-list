import { AddContact, ContactActionType, ContactState, Contact, EditContact, RemoveContact, ContactAction } from "@store/models/contactReducer";
import { v4 as uuidv4 } from 'uuid';

const initialState: ContactState = [];

export const contactReducer = (state = initialState, action: ContactAction): ContactState => {
    switch (action.type) {
    case ContactActionType.ADD_CONTACT: {
        const { name } = action;
        return [...state, { name, uid: uuidv4() }];
    }
    case ContactActionType.REMOVE_CONTACT: {
        const { uid } = action;
        const newState = state.filter((item) => item.uid !== uid);

        return newState;
    }
    case ContactActionType.EDIT_CONTACT: {
        const { uid, name } = action.contact;
        const newState = state.map((item) => {
            if(item.uid === uid){
                item.name = name;
            }
            return item;
        });

        return newState;
    }
    default:
        return state;
    }
};


export const addContact = (name: string): AddContact => ({
    type: ContactActionType.ADD_CONTACT,
    name,
});

export const removeContact = (uid: string): RemoveContact => ({
    type: ContactActionType.REMOVE_CONTACT,
    uid,
});

export const editContact = (contact: Contact): EditContact => ({
    type: ContactActionType.EDIT_CONTACT,
    contact,
});