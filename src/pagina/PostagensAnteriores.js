import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function PostagensAnteriores(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
            setData(result.data);
        };

        GetData();

    }, []);
    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <div style={{ paddingTop: '3em' }}>
            <Container>
                <hr></hr>
                <h2>Materias Ja postadas</h2>
                {data.map((postagem, idx) => {
                    return (
                        <Row>
                            <hr></hr>
                            <Button style={{ backgroundColor: 'white' }} onClick={attPage}>
                                <Link key={postagem} to={"/postagem/" + postagem._id} style={{ color: 'black', textDecoration: 'none' }}>{postagem.titulo}</Link>
                            </Button>
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