import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap";
import axios from "axios";
import BarraDeTarefa from "../component/BarradeTarefa";
function NoticiaQualidade(props) {
    const {id} = useParams()
    const [data, setData] = useState({});
    
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:5000/postagempcts/noticiapcts/' + id);
            setData(result.data);
        };

        GetData();
console.log(data)
    }, []);

    return (

        <Container
            className="bg-light border"
            fluid
            style={{ padding: "6rem" }}
        >
            <BarraDeTarefa/>
            <img src="/assets/img3.png" style={{ width: '100%' }} alt="imgFromIberia" />
            <Container>
                <Row>
                    <Col></Col>
                    <Col sm='12'><h1>{data.titulo}</h1></Col>
                    <Col></Col>
                </Row>
                <hr></hr>
                <Row>
                    <Container>
                        <Col><h3 style={{ textAlign: 'justify' }} >{data.conteudo}</h3></Col>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container>
                        <Col><h4 style={{ color: 'gray' }} >{data.autor}</h4></Col>                        
                    </Container>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col><div><Button href='/'>Pagina Inicial</Button></div></Col>
                </Row>

            </Container>
        </Container>
    )
}
export default NoticiaQualidade;