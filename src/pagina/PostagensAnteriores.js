import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import BarraDeTarefa from "../component/BarradeTarefa";
function PostagensAnteriores(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const GetData = async () => {
            const result = await axios('https://serviceiberia.herokuapp.com/postagem');
            setData(result.data);
        };

        GetData();

    }, []);
    console.log(data)
    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <div style={{ paddingTop: '3em' }}>
            <BarraDeTarefa/>
            <Container>
                <hr></hr>
                <h2>Materias Ja postadas</h2>
                <Row>
                    <Col><Button href='/postagenstelemetria'>Noticias Telemetira</Button></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <hr></hr>
                {data.map((postagem, idx) => {
                    return (
                        <Row>
                            <hr></hr>
                            
                                <Link key={postagem} to={"/postagem/" + postagem._id} style={{ color: 'black', textDecoration: 'none' }}>{postagem.titulo}</Link>
                            
                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.conteudo}</p>
                            <hr></hr>
                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Setor :{postagem.categoria}</p>
                            <hr></hr>
                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Autor :{postagem.autor}</p>
                        </Row>
                    )
                })}
                <Button href='/'>Pagina Inicial</Button>
            </Container>
        </div>
    )
}
export default PostagensAnteriores;