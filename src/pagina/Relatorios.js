import React from "react";
import { Container } from "reactstrap";
import BarraDeTarefa from "../component/BarradeTarefa";
import TableFuncionarios from "../component/TableFuncionarios";
function Relatorios() {
    return (
        <div style={{paddingTop:'6rem'}}>
            <BarraDeTarefa />
            <TableFuncionarios />
        </div>
    )
}
export default Relatorios;