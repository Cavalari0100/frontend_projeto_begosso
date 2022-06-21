import React, { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import axios from "axios";
function TableFuncionarios() {
    const [data, setData] = useState([]);
    const [deleteFunc, setDeleteFunc] = useState([])
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:5000/funcionarios');
            setData(result.data);
        };

        GetData();

    }, []);
    const DeleteFuncionario = async (id) => {
        const url = "http://localhost:5000/funcionario/deletarfuncionario/" + id;
        const data = await axios.delete(url).then(response => {
            return (
                alert(response.data + 'por favor atualize a pagina')
                );
        }).catch(err => {
            return alert(false);
        })
    }
    return (
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
                        Nome Funcionario
                    </th>
                    <th>
                        E-mail
                    </th>
                    <th>
                        Editar Senha
                    </th>
                    <th>
                        Excluir User
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((funcionario, index) => {
                    return (
                        <tr>
                            <td>

                            </td>
                            <td key={funcionario}>
                                {funcionario.name}
                            </td>
                            <td key={funcionario}>
                                {funcionario.email}
                            </td>
                            <td>
                                <Button color="warning">
                                    Alterar Senha
                                </Button>
                            </td>
                            <td>
                                <Button color="danger" onClick={() => DeleteFuncionario(funcionario._id)}>
                                    Deletar Registro
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
export default TableFuncionarios;