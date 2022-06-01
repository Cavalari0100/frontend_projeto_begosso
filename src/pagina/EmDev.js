import React from "react"
import { Button, Col, Container, Row } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
function EmDev() {
    return (
        <div style={{ paddingTop: '4em' }}>
            <BarraDeTarefa />
            <Container>
                <Row>
                    <h2>Pagina em construção,por favor contacte o desenvolvedor do site e retorne a pagina inicial...</h2>
                </Row>
                <Button href='/'>Pagina Inicial</Button>
            </Container>
        </div>
    )
}
export default EmDev;