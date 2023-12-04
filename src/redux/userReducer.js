import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const userSlice = createSlice({
    name:'user',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaUsers:[]
    },
    reducers:{
        adicionar:(state, action)=>{
            state.listaUsers.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaUsers = state.listaUsers.filter(user => user.id !== action.payload.id);
        },
        atualizar:(state,action)=>{
            const listaTemporariaUsers = state.listaUsers.filter(user => user.id !== action.payload.id);
            state.listaUsers = [...listaTemporariaUsers, action.payload.user];
        }

    }
});
export const {adicionar,remover,atualizar} = userSlice.actions;
export default userSlice.reducer;