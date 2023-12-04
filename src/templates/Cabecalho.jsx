import { Alert } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Cabecalho(props) {
    return (
        <header>
            <Alert variant="light" className={'text-center'}>
                {props.conteudo || "Prova de BCC 2 bim"}
            </Alert>
        </header>
    )
}