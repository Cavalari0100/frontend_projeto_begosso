import React, { useState, useEffect } from "react";
import { CardGroup, Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from "reactstrap";
import FooterPage from "../component/FooterPage";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import axios from "axios";
import { Link } from "react-router-dom";
import BarraDeTarefa from "../component/BarradeTarefa";
function HomeTelemetria() {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagemtelemetria');
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
            <img src="/assets/bannerTelemetria.png" style={{ width: '100%' }} alt="imgFromIberia" />
            <Container >
                <Row>
                    <Col>
                        <Container>
                            <h1>Historia sobre nossa Telemetria</h1>
                            <Row
                                md="2"
                                sm="2"
                                xs="1">

                                <Col>
                                    <p>
                                        O projeto de telemetria agrícola teve seu início na iberia no ano de 2015,
                                        com o monitoramento dos equipamentos de colheita, neste mesmo ano implantamos
                                        mais dois projetos,  FUT (Fila unica de Transbordo) e CDC (Certificado Digital de Cana)
                                        , deixando todo o CTT 100% automatizado. No ano de 2017 iniciamos com mais um projeto
                                        chamado TPL, onde colocamos os computadores de bordo para controlar as operações agrícolas.
                                    </p>
                                </Col>
                                <Col>
                                    <img src="assets/bannerTelemetria.png" style={{ width: '100%' }} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    {/* <Col><PrevisaoDoTempo /></Col> */}
                </Row>
                <hr></hr>
{/*                 <Row id="destaques">
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
                                    <CardGroup style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                        <Card >
                                            <CardImg
                                                alt="Card image cap"
                                                src="assets/telemetriaImg.png"
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
                                                    <Link key={postagem} to={"/postagemtelemetria/" + postagem._id} style={{ color: 'white', textDecoration: 'none' }}>Mais..</Link>
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                )
                            })}


                        </Row>
                    </Col>
                </Row> */}
            </Container>
            <hr></hr>
            <FooterPage />
        </div>
    )
}
export default HomeTelemetria;