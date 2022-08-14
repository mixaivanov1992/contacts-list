import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { contactReducer } from '@store/reducer/contactReducer';
import { personalDataReducer } from '@store/reducer/personalDataReducer';

export const rootReducer = combineReducers({
    contactReducer,
    personalDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
