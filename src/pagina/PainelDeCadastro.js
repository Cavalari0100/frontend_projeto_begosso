import React from "react";
import { Container, Row, Col, NavLink, Form, Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
import Relatorios from '../pagina/Relatorios';
function PainelDeCadastro() {
    return (
        <div style={{ padding: '6em' }}>
            <BarraDeTarefa></BarraDeTarefa>
            <Row style={{ padding: "1rem" }}>
            <h1>Ferramentas de Cadastro</h1>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Iberia
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre uma noticia para a Iberia
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/b7b282fa9f614135b66cc08979b7e6f1">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Telemetria
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/0eb139050ed34360a93615e727c445d2">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Balança
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/0eb139050ed34360aaskldj44asd5das">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Qualidade(Pcts)
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/0eb139050ed343asdasdsa4525das522">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                TI
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/0eb139050ed34360aaskgfgvcbcb4789">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Recursos Humanos
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre uma noticia para o Recursos Humanos
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/0eb139050ed34360adasdrsidjas8asd">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Funcionario
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre um Funcionario novo
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/cadastro/funcionario">Cadastro de Funcionario</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{ padding: "1rem" }}>
                <h1>Relatorios e tabelas</h1>

                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Funcionario
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Configure o cadastro dos funcionarios
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/relatoriofuncionarios">Configurar</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Postagens
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Relatorio de Postagens por Setor
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/relatoriodepostagens">Visualizar</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" style={{ padding: "1rem" }}>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Clima Tempo
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Relatorio de Clima Tempo para Plantio
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color: 'white' }} href="/relatorioclimatempo">Configurar</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default PainelDeCadastro;