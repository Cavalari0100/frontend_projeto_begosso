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

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hometelemetria" element={<HomeTelemetria />} />
      <Route path="/homebalanca" element={<HomeBalanca />} />
      <Route path='/cadastronoticia' element={<CadastroNoticia />} />
      <Route path='/cadastronoticiatelemetria' element={<CadastroNoticiaTelemetria />} />
      <Route path='/postagem/:id' element={<Noticia />} />
      <Route path='/postagens' element={<PostagensAnteriores />} />
      <Route path='/postagenstelemetria' element={<PostagensTelemetria />} />
    </Routes>
  </BrowserRouter>
);