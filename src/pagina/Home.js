import React from "react";
import { Container, Row, Col } from "reactstrap";
import Cardgroups from "../component/CardGrops";
import FooterPage from "../component/FooterPage";
import MidlePage from "../component/MidlePage";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import SlideImg from "../component/SlideImg";

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
                <hr></hr>
                <Row>
                    <Col><PrevisaoDoTempo /></Col>
                </Row>
                <br></br>
                <Row id="destaques">
                    <Col>
                        <Cardgroups />
                    </Col>
                </Row>
                <br></br>
            </Container>
            <FooterPage />
        </div>
    )
}
export default Home;