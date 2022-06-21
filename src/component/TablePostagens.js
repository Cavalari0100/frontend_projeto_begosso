import React, { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import axios from "axios";
function TablePostagens() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:5000/relatorioqtdpostagens');
            setData(result.data);
        };

        GetData();
        
    }, []);
    console.log(data)
    return (
        <div>
            <Table
                hover
                responsive
                size="sm"
                striped
            >
                <thead>
                    <tr>
                        <th>
                            *
                        </th>
                        <th>
                            Qtde Materia Iberia
                        </th>
                        <th>
                            Qtde Materia Telemetria
                        </th>
                        <th>
                            Qtde Materia Balança
                        </th>
                        <th>
                            Qtde Materia Ti
                        </th>
                        <th>
                            Qtde Materia Qualidade
                        </th>
                        <th>
                            Qtde Materia Recursos Humanos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((postagens, index) => {
                        return (
                            <tr>
                                <td>

                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postagema}
                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postagemb}
                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postagemc}
                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postagemd}
                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postageme}
                                </td>
                                <td key={postagens} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {postagens.postagemf}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default TablePostagens;