export type ContactState = Array<Contact>;

export enum ContactActionType{
    ADD_CONTACT = 'ADD_CONTACT',
    REMOVE_CONTACT = 'REMOVE_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT',
}

export interface AddContact {
    type: ContactActionType.ADD_CONTACT,
    name: string
}

export interface RemoveContact {
    type: ContactActionType.REMOVE_CONTACT,
    uid: string
}

export interface EditContact {
    type: ContactActionType.EDIT_CONTACT,
    contact: Contact
}

export type ContactAction = AddContact | RemoveContact | EditContact;

export type Contact = {
    uid: string,
    name: string
}