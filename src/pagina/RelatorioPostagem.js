import React from "react";
import BarraDeTarefa from "../component/BarradeTarefa";
import Chartpostagens from "../component/ChartPostagens";
import TablePostagens from "../component/TablePostagens";
function RelatorioPostagem() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <BarraDeTarefa />
            <TablePostagens />
            <Chartpostagens />
        </div>
    )
}
export default RelatorioPostagem;