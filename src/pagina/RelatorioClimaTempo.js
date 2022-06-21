import React from "react";
import BarraDeTarefa from "../component/BarradeTarefa";
import PrevisaoDoTempo from "../component/PrevisaoDoTempo";
import RelatorioClima from "../component/RelatorioClima";
function RelatorioClimaTempo() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <BarraDeTarefa />
            <RelatorioClima/>
        </div>
    )
}
export default RelatorioClimaTempo;