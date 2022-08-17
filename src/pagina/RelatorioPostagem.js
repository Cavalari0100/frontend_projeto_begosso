import React from "react";
import BarraDeTarefa from "../component/BarradeTarefa";
import Chartpostagens from "../component/ChartPostagens";
import TablePostagens from "../component/TablePostagens";
function RelatorioPostagem() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <h1>Relatorio de quantidade de postagem por setor</h1>
            <hr></hr>
            <BarraDeTarefa />
            <TablePostagens />
            <hr></hr>
            <Chartpostagens />
        </div>
    )
}
export default RelatorioPostagem;