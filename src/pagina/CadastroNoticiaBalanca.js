import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Col, Row, FormText, Input, Button } from "reactstrap";
import axios from "axios";
import BarraDeTarefa from "../component/BarradeTarefa";
function CadastroNoticiaBalanca() {

    const [newPostagem, setNewPostagem] = useState({ titulo: '', conteudo: '', autor: '' });
    const url = 'http://localhost:5000/postagembalanca/novapostagem';

    const InsertNewPostagem = (e) => {
        e.preventDefault();
        //debugger;
        const data = { titulo: newPostagem.titulo, conteudo: newPostagem.conteudo, autor: newPostagem.autor }
        axios.post(url, data);
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewPostagem({ ...newPostagem, [e.target.name]: e.target.value });
    }

    const attPage = (e) => {
        window.location.reload();
        window.location = "/homebalanca";
    }

    return (
        <Container
            className="bg-light border"
            fluid
            style={{ padding: "4rem" }}>
            <BarraDeTarefa />
            <img src="/assets/bannerBalanca.png" style={{ width: '100%' }} alt="imgFromIberia" />
            <Row>
                <Col>
                </Col>
                <Col>
                    <h3>Nova Postagem da Balança</h3>
                </Col>
                <Col>
                </Col>
            </Row>
            <hr></hr>
            <Form onSubmit={InsertNewPostagem}>
                <FormGroup row>
                    <Label
                        for="titulo"
                        sm={2}
                    >
                        Titulo
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="titulo"
                            name="titulo"
                            placeholder="Digite o titulo de sua materia"
                            type="text"
                            value={newPostagem.titulo} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="conteudo"
                        sm={2}
                    >
                        Conteudo
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="conteudo"
                            name="conteudo"
                            placeholder="Digite o conteudo de sua materia"
                            type="textarea"
                            value={newPostagem.conteudo} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="autor"
                        sm={2}
                    >
                        Autor
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="autor"
                            name="autor"
                            placeholder="Digite o nome do autor desta materia"
                            type="text"
                            value={newPostagem.autor} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Row>
                            <Col>
                                <Button style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" onClick={attPage}>
                                    Submit
                                </Button>
                            </Col>
                            <Col>
                                <Button style={{ background: "#3399ff" }} to={'/hometelemetria'} type="submit" className="btn btn-secondary mb-1" onClick={attPage}>
                                    Pagina Telemetria
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default CadastroNoticiaBalanca;