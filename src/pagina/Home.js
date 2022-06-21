import React from "react";
import { Container, Row, Col } from "reactstrap";
import Cardgroups from "../component/CardGrops";
import FooterPage from "../component/FooterPage";
import MidlePage from "../component/MidlePage";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import SlideImg from "../component/SlideImg";
import CardsSetores from "../component/CardsSetores";
function Home() {
    return (
        <div style={{ paddingTop: '3em' }}>
            <SlideImg />
            <Container >
                <Row>
                    <Col>
                        <MidlePage />
                    </Col>
                </Row>
            </Container>
            <CardsSetores />
            <hr></hr>
            <Container>
                <Row>
                    <Col><PrevisaoDoTempo /></Col>
                </Row>
            </Container>
            <br></br>
            <Container>
                <Row id="destaques">
                    <Col>
                        <Cardgroups />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <FooterPage />
        </div>
    )
}
export default Home;