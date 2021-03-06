import React, { useState, useEffect } from "react";
import { CardGroup, Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
function Cardgroups(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:5000/postagemiberia');  
            setData(result.data);
        };
        GetData();

    }, []);
    
    const ultimo = data.length;
    const antepenltimo = data.length - 3;
     console.log(data)

      const attPage = (e) => {
        window.location.reload();
    }
    return (
        <Row
            md="3"
            sm="2"
            xs="1">
            <br></br>
            {data.slice(antepenltimo,ultimo).map((postagem, index) => {
                console.log(postagem)
                return (
                    
                    <CardGroup style={{ width:'430px', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/img4.png"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    <h1 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.titulo}</h1>
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <h3 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Por:{postagem.autor}</h3>
                                </CardSubtitle>
                                <CardText>
                                    <p key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.conteudo}</p>
                                </CardText>
                                <Button onClick={attPage}>
                                    <Link key={postagem} to={"/postagem/" + postagem._id} style={{color:'white' , textDecoration:'none'}}>Mais..</Link>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                )
            })}
        </Row>
    )
}
export default Cardgroups;