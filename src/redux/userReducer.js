import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Estado from "../recursos/estado";
const urlBase = "https://backend-bcc-2-b.vercel.app/user";
export const getUsers = createAsyncThunk('getUsers', async () => {
    try {
        const resposta = await fetch(urlBase, { method: "GET" });
        const response = await resposta.json();
        if (response.status) {
            return {
                status: response.status,
                listaUsers: response.listaUsers
            }
        }
        else {
            return {
                status: response.status,
                listaUsers: []
            }
        }
    } catch (erro) {
        return {
            status: false,
            listaUsers: []
        }
    }
});

export const cadastrarUser = createAsyncThunk('cadastrarUser', async (user) => {
    try {
        const resposta = await fetch(urlBase, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const response = await resposta.json();
        if (response.status){
            return {
                status: response.status,
                user:user,
                mensagem: response.mensagem
            }
        }
        else{
            return {
                status: response.status,
                mensagem: response.mensagem
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: "Não foi possível cadastrar o usuário: " + erro.message
        }
    }
});

const estadoInicial = {
    estado: Estado.OCIOSO,
    mensagem: "",
    users: []
}

const userslice = createSlice({
    name: 'user',
    initialState: estadoInicial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.estado = Estado.PENDENTE;
                state.mensagem = 'Buscando users...';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = Estado.OCIOSO;
                    state.mensagem = "Users recuperados do backend!";
                    state.users = action.payload.listaUsers;
                }
                else {
                    state.estado = Estado.ERRO;
                    state.mensagem = action.payload.mensagem;
                    state.users = [];
                }
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.estado = Estado.ERRO;
                state.mensagem = action.payload.mensagem;
                state.users = [];
            })
            .addCase(cadastrarUser.pending, (state, action) =>{
                state.estado = Estado.PENDENTE;
                state.mensagem = 'Processando a requisição...'
            })
            .addCase(cadastrarUser.fulfilled, (state, action) =>{
                if (action.payload.status){
                    state.estado = Estado.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.users.push(action.payload.produto);
                }
                else{
                    state.estado = Estado.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(cadastrarUser.rejected, (state, action) => {
                state.estado = Estado.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
});

export default userslice.reducer;