import React from 'react';
import Contacts from '@components/Contacts/Contacts';
import Login from '@components/Login/Login';
import { useTypedSelector } from '@hooks/useTypedSelector';

const App: React.FC = () => {
    const {auth} = useTypedSelector((state) => state.personalDataReducer);
    return (
        <div className="App">
            {auth?<Contacts />: <Login />}
        </div>
    );
}

export default App;
