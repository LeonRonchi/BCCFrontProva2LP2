import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { Alert } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Tela404(props){
    return(
        <Container>
            <Pagina>
                <Alert variant="danger">
                    O sistema não oferece acesso a essa página.
                    Utilize o Menu para acessar as opções válidas. 
                </Alert> 
            </Pagina>
        </Container>
    );
}