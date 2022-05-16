import React from "react";
import { Container, Row, Col } from "reactstrap";
function FooterPage() {
    return (
        <div style={{ backgroundColor: '#229954', padding: '6rem',paddingBottom:'6rem', width: 'auto',height:'auto' }}>
            <Container>
                {/* <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    <Col><img src="assets/logo-pauxi-mitu.png" width='100%'></img></Col>
                    <Col style={{ fontSize: '20px' }}></Col>
                    <Col><img src="assets/logo-pauxi-mitu.png" width='100%'></img></Col>
                </Row> */}
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col><h2>Setores</h2></Col>
                            <Col><a href='/' style={{textDecoration:'none' , color:'white'}}>Iberia</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>Telemetria</a></Col>
                            <Col><a href='/homebalanca' style={{textDecoration:'none' , color:'white'}}>Balança</a></Col>
                            <Col><a href='/homequalidade' style={{textDecoration:'none' , color:'white'}}>qualidade</a></Col>
                            <Col><a href='/homepcts' style={{textDecoration:'none' , color:'white'}}>PCTS</a></Col>
                            {/* <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>Qualidade</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>TI</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>PCTS</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>P&D</a></Col> */}
                        </Row>
                    </Col>
                    
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col><h2>Contatos</h2></Col>
                            {/* <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>Facebook</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>Instagram</a></Col>
                            <Col><a href='/hometelemetria' style={{textDecoration:'none' , color:'white'}}>Email</a></Col> */}
                            <Col><a style={{textDecoration:'none' , color:'white'}}>Telefone :</a></Col>
                            <Col><a style={{textDecoration:'none' , color:'white'}}>(18) 3367-9090</a></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14779.451952498344!2d-50.48252745!3d-22.169286849999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495a670db16f76b%3A0xb9ee8e64e5cb509e!2sUsina%20Ib%C3%A9ria%2C%20Bor%C3%A1%20-%20SP%2C%2019740-000!5e0!3m2!1spt-BR!2sbr!4v1651242202408!5m2!1spt-BR!2sbr" width="110%" height="150%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default FooterPage;