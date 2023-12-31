import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Pagina(props) {
    return (
        <>
            <Cabecalho conteudo='Sistema de Bate-Papo WEB' />
            <Menu />
            <div>
                {
                    
                }
                {props.children} 
            </div>
            <Rodape conteudo="Rua Monsenhor Nakamura, 1146 - Álvares Machado/SP - CPF xx.xxx.xxx/xxxx-xx"/>
        </>
    )
}

