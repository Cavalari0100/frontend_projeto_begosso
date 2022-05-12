import React from "react"
import { Button, Container } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
function EmDev() {
    return (
        <div style={{ paddingTop: '4em' }}>
            <BarraDeTarefa />
            <Container>
                <h1>PAGINA EM CONSTRUÇÃO</h1>
                <Button href='/'>Pagina Inicial</Button>
            </Container>
        </div>
    )
}
export default EmDev;