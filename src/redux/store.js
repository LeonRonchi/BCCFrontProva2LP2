import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userReducer';

const store = configureStore({
    reducer:{
        user: userSlice,
        mensagem: mensagemSlice
    }
});

export default store;