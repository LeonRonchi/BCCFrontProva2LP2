import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';
import { adicionar, atualizar} from '../../redux/userReducer';

export default function FormCadUser(props) {
    //os atributos deste objeto devem estar associados aos inputs do formulários
    const userVazio = {
        id:'',
        nickname:'',
        urlAvatar:'',
        dataIngresso:'',
        mensagens:[]
    }
    const estadoInicialUser = props.userParaEdicao;
    const [user, setUser] = useState(estadoInicialUser);
    const [formValidado, setFormValidado] = useState(false);
    const {status,mensagem,listaUsers} = useSelector((state)=>state.user);
    const dispatch = useDispatch();


    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setUser({...user,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            //todos os campos preenchidos
            //mandar os dados para o backend
            if(!props.modoEdicao){
                //substituído pelo padrão redux
                //props.setListaUsers([...props.listaUsers,user]);
                dispatch(adicionar(user));
            }
            else{
                //alterar os dados do user (filtra e adiciona)

                //substituído pelo padrão redux
                //props.setListaUsers([...props.listaUsers.filter((itemUser)=>itemUser.cpf !== user.cpf),user]);
                dispatch(atualizar(user));
                props.setModoEdicao(false);
                props.setUserParaEdicao(userVazio);                
            }
            setUser(userVazio); // ou sair da tela de formulário 
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    id="cpf" 
                                    name="cpf" 
                                    value={user.cpf}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome completo" 
                                    id="nome" 
                                    name="nome" 
                                    value={user.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Avenida/Rua/Alameda/Viela ..." 
                                    id="endereco" 
                                    name="endereco" 
                                    onChange={manipularMudancas}
                                    value={user.endereco}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nº" 
                                    id="numero" 
                                    name="numero" 
                                    onChange={manipularMudancas}
                                    value={user.numero}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Bairro/Vila..." 
                                    id="bairro" 
                                    name="bairro" 
                                    onChange={manipularMudancas}
                                    value={user.bairro}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Cidade" 
                                    id="cidade" 
                                    name="cidade" 
                                    onChange={manipularMudancas}
                                    value={user.cidade}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select 
                                aria-label="Unidades Federativas brasileiras" 
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={user.uf}
                                requerid>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="00000-000" 
                                    id="cep" 
                                    name="cep"
                                    onChange={manipularMudancas}
                                    value={user.cep}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}