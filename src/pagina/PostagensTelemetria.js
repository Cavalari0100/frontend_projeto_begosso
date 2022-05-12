import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import BarraDeTarefa from "../component/BarradeTarefa";
function PostagensTelemetria(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagemtelemetria');
            setData(result.data);
        };

        GetData();

    }, []);

    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <div style={{ paddingTop: '3em' }}>
            <BarraDeTarefa/>
            <Container>
                <hr></hr>
                <h2>Materias Ja postadas</h2>
                <Button href='/'>Pagina Inicial</Button>
                <hr></hr>
                {data.map((postagem, idx) => {
                    return (
                        <Row>
                            <hr></hr>
                            <Button style={{ backgroundColor: 'white' }} onClick={attPage}>
                                <Link key={postagem} to={"/postagemtelemetria/" + postagem._id} style={{ color: 'black', textDecoration: 'none' }}>{postagem.titulo}</Link>
                            </Button>
                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.conteudo}</p>

                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Setor :{postagem.categoria}</p>

                            <p style={{ maxWidth: "150ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Autor :{postagem.autor}</p>
                            <hr></hr>
                        </Row>
                    )
                })}
                <Button href='/'>Pagina Inicial</Button>
            </Container>
        </div>
    )
}
export default PostagensTelemetria;