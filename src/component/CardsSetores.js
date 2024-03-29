import React from "react";
import { CardGroup, Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from "reactstrap";

function CardsSetores() {
    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <div style={{ width: '100%' }}>
            <Row
                md="5"
                sm="4"
                xs="1" >
                <Col>
                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/bannerTelemetria.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    <p style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Entomologia</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <a href="/hometelemetria" style={{ textDecoration: 'none', color: 'white' }}>Acessar</a>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/bannerBalanca.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    <p style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Balança</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <a href="/homebalanca" style={{ textDecoration: 'none', color: 'white' }}>Acessar</a>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/bannerQualidade.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    <p style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Qualidade</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <a href="/homequalidade" style={{ textDecoration: 'none', color: 'white' }}>Acessar</a>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/bannerTi.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    <p style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>TI</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <a href="/hometi" style={{ textDecoration: 'none', color: 'white' }}>Acessar</a>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/bannerRh.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    <p style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>RH</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <a href="/homerh" style={{ textDecoration: 'none', color: 'white' }}>Acessar</a>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    )
}
export default CardsSetores;