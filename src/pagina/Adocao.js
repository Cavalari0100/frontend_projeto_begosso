import React from "react";
import { Container, Row, Col , CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Cardgroups from "../component/CardGrops";
import FooterPage from "../component/FooterPage";
import MidlePage from "../component/MidlePage";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import SlideImg from "../component/SlideImg";
import CardsSetores from "../component/CardsSetores";
import BarraDeTarefa from "../component/BarradeTarefa";
function Adocao() {
    return (
        <div style={{ paddingTop: '3em' }}>
            <BarraDeTarefa></BarraDeTarefa>
            <Row style={{ paddingTop: "30px" }}>
                <Col></Col>
                <Col><h1 style={{fontSize:"30px"}}> ❤️ADOÇÃO RESPONSAVEL ❤️</h1><br></br><br></br><hr></hr></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{fontFamily:"sans-serif" , fontSize:"16px", textAlign:"justify"}}>
                        Sabia que ter uma companhia de um gato desses te garante muito amor e alegria?
                        Um rotina com esse gato é cheia de sorrisos e benefícios.
                        Pesquisas afirmam que a convivência e a responsabilidade com esse gato
                        são benéficas tanto para saúde física quanto mental.
                        Conviver com esse gato ajuda a evitar e cuidar da depressão,
                        ajuda no sistema imunológico, melhora a autoestima,
                        espanta a tristeza, relaxa e fornece muito amor!
                    </h2>
                </Col>
                <Col>
                <CardGroup style={{ width:'430px', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/gato.jpg"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    <h1  style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>João Vitor C. Spavier</h1>
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <h3  style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>22 Anos</h3>
                                </CardSubtitle>
                                <CardText>
                                    <p  style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>4°ano de Ciencia da computação FEMA</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                <h2>
                    Documentos necessarios para a adoção:<br></br>
                    ° RG ou CPF.<br></br>
                    ° Declaração de residência. <br></br>
                    ° Amor e carinho regularmente.<br></br>
                </h2>
                </Col>
            </Row>
        </div>
    )
}
export default Adocao;