import React, { useState, useEffect } from "react";
import {Container,Card, CardBody,CardTitle, CardSubtitle, Button, Col, Row, Form, Label, Input, InputGroup
} from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
import axios from "axios";

function LoginPage(props) {

    const [login, setNewLogin] = useState({ email: '', password: '' });
    const url = 'http://localhost:5000/auth/login';


    const LoginUsuario = async (e) => {
        const result = await axios.post(url, login).then(res => {
            return res.data;
        }).catch(err => {
            return false;
        })
        if (result.token) {
            localStorage.setItem('token', result.token);
            window.location = "/" 
        } else {
            alert('Ops algo de errado aconteceu com o seu login, verifique suas credenciais de acesso!!!')
        }
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewLogin({ ...login, [e.target.name]: e.target.value });
    }
    const JoinPage = () => {
        props.history.push("/")
    }
    return (
        <Container>
            <BarraDeTarefa />
            <div style={{ paddingTop: '6em' }}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Login</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Funcionarios</CardSubtitle>
                        <Row>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="email" style={{ paddingRight: 15 }}>E-Mail :</Label>
                                    <Input type="email" name="email" id="email" placeholder="Digite seu email do funcionario" value={login.email} onChange={onChange} />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="password" style={{ paddingRight: 15 }}>Senha :</Label>
                                    <Input type="password" name="password" id="passWord" placeholder="Digite uma senha para acesso" value={login.password} onChange={onChange} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => LoginUsuario()}>Login</Button>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )
}
export default LoginPage;