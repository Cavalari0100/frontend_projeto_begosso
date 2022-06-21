import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from './pagina/Home';
import HomeTelemetria from './pagina/HomeTelemetria';
import HomeBalanca from './pagina/HomeBalanca';
import CadastroNoticia from './pagina/CadastroNoticia';
import Noticia from './pagina/Noticias';
import PostagensAnteriores from './pagina/PostagensAnteriores';
import CadastroNoticiaTelemetria from './pagina/CadastroNoticiaTelemetria';
import PostagensTelemetria from './pagina/PostagensTelemetria';
import EmDev from "./pagina/EmDev";
import HomeQualidade from "./pagina/HomeQualidade";
import NoticiaTelemetria from "./pagina/NoticiaTelemetria";
import NoticiaBalanca from "./pagina/NoticiaBalanca";
import PostagensTi from "./pagina/Postagemti";
import NoticiaTi from "./pagina/NoticiaTi";
import HomeTi from "./pagina/HomeTi";
import LoginPage from "./pagina/Login";
import CadastroFuncionario from "./pagina/CadastroFuncionario";
import PainelDeCadastro from "./pagina/PainelDeCadastro";
import CadastroNoticiaBalanca from "./pagina/CadastroNoticiaBalanca";
import NoticiaQualidade from "./pagina/NoticiaQualidade";
import CadastroNoticiaPcts from "./pagina/CadastroNoticiaPcts";
import CadastroNoticiaTi from "./pagina/CadastroNoticiaTi";
import HomeRh from "./pagina/HomeRh"
import CadastroNoticiaRh from "./pagina/CadastroNoticiaRh";
import NoticiaRh from "./pagina/NoticiaRh";
import Relatorios from "./pagina/Relatorios";
import RelatorioPostagem from "./pagina/RelatorioPostagem";
import RelatorioClimaTempo from "./pagina/RelatorioClimaTempo";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/homepcts" element={<HomePcts />} />
      <Route path='/postagempcts/:id' element={<NoticiaPcts />} /> */}
      {/* FERRAMENTAS */}
      <Route path="/" element={<App />} />
      <Route path='/paginaemdesenvolvimento' element={<EmDev />} />
      <Route path='/paineldecadastros/3q1rsod2fr02b2b7nfemxntq3d3d' element={<PainelDeCadastro />} />
      {/* AUTENTICACAO */}
      <Route path='/autenticacao' element={<LoginPage />} />
      <Route path='/cadastro/funcionario' element={<CadastroFuncionario />} />
      {/* IBERIA */}
      <Route path="/home" element={<Home />} />
      <Route path='/b7b282fa9f614135b66cc08979b7e6f1' element={<CadastroNoticia />} />
      <Route path='/postagem/:id' element={<Noticia />} />
      <Route path='/postagens' element={<PostagensAnteriores />} />
      {/* TELEMETRIA */}
      <Route path="/hometelemetria" element={<HomeTelemetria />} />
      <Route path='/0eb139050ed34360a93615e727c445d2' element={<CadastroNoticiaTelemetria />} />
      <Route path='/postagemtelemetria/:id' element={<NoticiaTelemetria />} />
      <Route path='/postagenstelemetria' element={<PostagensTelemetria />} />
      {/* QUALIDADE PCTS */}
      <Route path="/homequalidade" element={<HomeQualidade />} />
      <Route path='/0eb139050ed343asdasdsa4525das522' element={<CadastroNoticiaPcts />} />
      <Route path="/postagemqualidade/:id" element={<NoticiaQualidade />} />
      {/* BALANÇA */}
      <Route path="/homebalanca" element={<HomeBalanca />} />
      <Route path='/0eb139050ed34360aaskldj44asd5das' element={<CadastroNoticiaBalanca />} />
      <Route path='/postagembalanca/:id' element={<NoticiaBalanca />} />
      {/* TI */}
      <Route path="/hometi" element={<HomeTi />} />
      <Route path='/postagemti/:id' element={<NoticiaTi />} />
      <Route path='/postagensti' element={<PostagensTi />} />
      <Route path='/0eb139050ed34360aaskgfgvcbcb4789' element={<CadastroNoticiaTi />} />
      {/* RH */}
      <Route path='/homerh' element={<HomeRh />} />
      <Route path='/0eb139050ed34360adasdrsidjas8asd' element={<CadastroNoticiaRh />} />
      <Route path='/postagemrh/:id' element={<NoticiaRh />} />
      {/* RELATORIOS */}
      <Route path='/relatoriofuncionarios' element={<Relatorios />} />
      <Route path='/relatoriodepostagens' element={<RelatorioPostagem />} />
      <Route path='/relatorioclimatempo' element={<RelatorioClimaTempo />} />
    </Routes>
  </BrowserRouter>
);