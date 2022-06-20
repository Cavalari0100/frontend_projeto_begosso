import React from "react";
import { Container, Row, Col, NavLink, Form, Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";

function PainelDeCadastro() {
    return (
        <div style={{ padding: '6em' }}>
            <BarraDeTarefa></BarraDeTarefa>
            <Row>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Cadastrar uma Noticia para a Iberia
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui uma noticia para a Iberia
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/b7b282fa9f614135b66cc08979b7e6f1">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                            Cadastrar uma Noticia para a Telemetria
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/0eb139050ed34360a93615e727c445d2">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                            Cadastrar uma Noticia para a Balança
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/0eb139050ed34360aaskldj44asd5das">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                            Cadastrar uma Noticia para Qualidade(Pcts)
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/0eb139050ed343asdasdsa4525das522">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                            Cadastrar uma Noticia para TI
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui uma noticia para a Telemetria
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/0eb139050ed34360aaskgfgvcbcb4789">Cadastro de Noticia</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body
                        color="success"
                        outline
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Cadastro de Funcionario
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cadastre aqui um Funcionario novo
                            </CardSubtitle>
                            <Button>
                                <NavLink style={{ color:'white'}} href="/cadastro/funcionario">Cadastro de Funcionario</NavLink>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default PainelDeCadastro;