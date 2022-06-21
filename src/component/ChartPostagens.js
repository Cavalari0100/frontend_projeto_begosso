import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-google-charts';
function Chartpostagens() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const url = "http://localhost:5000/relatoriopostagens";
            const data = await axios.get(url).then(response => {
                return response.data;
            }).catch(err => {
                return null
            })
            if (data) {
                setData(data)
            }
        }
        getData();
    }, []);
    console.log(data)

    function postagensPorSetor(qtdpostagem) {
        let newPostagens = [['descricao', 'qtdpostagens']]
        data.forEach(todaspostagens => {
            newPostagens.push([todaspostagens.Descricao, todaspostagens.qtdpostagens])
        });
        return newPostagens;
    }
    return (
        <div>
            <Col md={6}>
                <Chart
                    chartType="ColumnChart"
                    data={postagensPorSetor(data)}

                    options={{
                        chartArea: {
                            width: '400px',

                        },
                        colors: ['green'],
                        title: 'Postagens por Setores',
                        hAxis: {
                            title: 'Setores',
                            minValue: 0
                        },
                        vAxis: {
                            title: ' Quantidade de postagens'
                        }
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </Col>
        </div>
    )
}
export default Chartpostagens;