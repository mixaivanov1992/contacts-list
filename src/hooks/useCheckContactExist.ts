import { ContactState } from '@store/models/contactReducer';

export const useCheckContactExist = (contacts: ContactState, newContact: string, uid?: string) => {
    const quantity = contacts.filter((item)=>item.name === newContact.trim() && item.uid !== uid ).length
    if(quantity){
        return true;
    }
    return false;
};
