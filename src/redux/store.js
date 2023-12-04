import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userReducer';
import mensagemSlice from './mensagemReducer'

const store = configureStore({
    reducer:{
        user: userSlice,
        mensagem: mensagemSlice
    }
});

export default store;