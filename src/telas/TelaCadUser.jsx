import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadUser from "./formularios/FormCadUsere";
import TabelaUsers from "./tabelas/tabUsers";
import { useState } from "react";

export default function TelaCadUser(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [userParaEdicao, setUserParaEdicao] = useState({
        id:'',
        nickname:'',
        urlAvatar:'',
        dataIngresso:'',
        mensagens:[]
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadUser exibirFormulario={setExibirFormulario} 
                                                userParaEdicao={userParaEdicao}
                                                setUserParaEdicao={setUserParaEdicao}
                                                modoEdicao={modoEdicao}
                                                setModoEdicao={setModoEdicao}
                                                />
                                        :
                                        <TabelaUsers exibirFormulario={setExibirFormulario}
                                                userParaEdicao={userParaEdicao}
                                                setUserParaEdicao={setUserParaEdicao}
                                                modoEdicao={modoEdicao}
                                                setModoEdicao={setModoEdicao}
                                                />
                }
            </Pagina>
        </Container>
    )
}