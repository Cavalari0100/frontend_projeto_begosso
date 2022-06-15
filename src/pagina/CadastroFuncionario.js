import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
import axios from "axios";
function CadastroFuncionario(props) {
    const [newFuncionario, setNewFuncionario] = useState({ name: '', email: '', password: '', confirmpassword: '' });
    const url = 'http://localhost:5000/auth/register';

    const Funcionario = (e) => {
        e.preventDefault();
        //debugger;
        const data = { name: newFuncionario.name, email: newFuncionario.email, password: newFuncionario.password, confirmpassword: newFuncionario.confirmpassword }
        axios.post(url, newFuncionario);
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewFuncionario({ ...newFuncionario, [e.target.name]: e.target.value });
    }

    const JoinPage = () => {
        props.history.push("/")
    }
    return (
        <Container>
            <BarraDeTarefa />
            <div style={{ paddingTop: '6em' }}>
                <Row>
                    <Col>
                        <Form onSubmit={Funcionario}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Nome :
                                </Label>
                                <Input
                                    id="nameId"
                                    name="name"
                                    placeholder="Insira o nome do funcionario"
                                    type="text"
                                    value={newFuncionario.name} onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email :
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Insira o email do funcionario"
                                    type="email"
                                    value={newFuncionario.email} onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Senha :
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Insira uma senha para o funcionario"
                                    type="password"
                                    value={newFuncionario.password} onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Confirme a senha :
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="confirmpassword"
                                    placeholder="Insira novamente a senha para o funcionario"
                                    type="password"
                                    value={newFuncionario.confirmpassword} onChange={onChange}
                                />
                            </FormGroup>
                            <Button style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1"   onClick={JoinPage} >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
export default CadastroFuncionario;