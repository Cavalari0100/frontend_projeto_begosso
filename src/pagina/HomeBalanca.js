import React, { useState, useEffect } from "react";
import { CardGroup, Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from "reactstrap";
import FooterPage from "../component/FooterPage";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import axios from "axios";
import { Link } from "react-router-dom";
import BarraDeTarefa from "../component/BarradeTarefa";
function HomeBalanca() {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('https://serviceiberia.herokuapp.com/postagembalanca');
            setData(result.data);
        };

        GetData();

    }, []);
    const ultimo = data.length;
    const antepenltimo = data.length - 3;
    console.log(data)

    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <div style={{ paddingTop: '3em' }}>
            <BarraDeTarefa />
            <img src="/assets/bannerBalanca.png" style={{ width: '100%' }} />
            <Container >
                <Row>
                    <Col>
                        <Container>
                            <h1>Noticia Fixa sobre a Balança</h1>
                            <Row
                                md="2"
                                sm="2"
                                xs="1">

                                <Col>
                                    <p style={{ textAlign: "justify" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                </Col>
                                <Col>
                                    <img src="assets/img7.png" style={{ width: '100%' }} />
                                </Col>
                                <Col>
                                    <p style={{ textAlign: "justify" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: "justify" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    {/* <Col><PrevisaoDoTempo /></Col>  */}
                </Row>
                <hr></hr>
                <Row id="destaques">
                    <Col>
                        <Row
                            md="3"
                            sm="2"
                            xs="1">

                            <br></br>
                            {data.slice(antepenltimo, ultimo).map((postagem, index) => {
                                const ultimo = data.length - 1;
                                const antepenltimo = data.length - 3;
                                return (
                                    <CardGroup style={{ width: '430px', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                        <Card >
                                            <CardImg
                                                alt="Card image cap"
                                                src="assets/img7.png"
                                                top
                                                width="100%"

                                            />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    <h1 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.titulo}</h1>
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    <h3 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Por:{postagem.autor}</h3>
                                                </CardSubtitle>
                                                <CardText>
                                                    <p key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.conteudo}</p>
                                                </CardText>
                                                <CardText>
                                                    <p key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> Setor : {postagem.categoria}</p>
                                                </CardText>
                                                <Button onClick={attPage}>
                                                    <Link key={postagem} to={"/postagembalanca/" + postagem._id} style={{ color: 'white', textDecoration: 'none' }}>Mais..</Link>
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                )
                            })}
                        </Row>
                        <br></br>
                    </Col>
                </Row>
            </Container>
            <FooterPage />
        </div>
    )
}
export default HomeBalanca;