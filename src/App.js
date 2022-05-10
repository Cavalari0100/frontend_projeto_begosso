import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BarraDeTarefa from './component/BarradeTarefa';
import Home from './pagina/Home';
import CadastroNoticia from './pagina/CadastroNoticia';
import Noticia from './pagina/Noticias';
import PostagensAnteriores from './pagina/PostagensAnteriores';
import HomeTelemetria from './pagina/HomeTelemetria';
import CadastroNoticiaTelemetria from './pagina/CadastroNoticiaTelemetria';
import PostagensTelemetria from './pagina/PostagensTelemetria';
import HomeBalanca from './pagina/HomeBalanca';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <BarraDeTarefa />
      <BrowserRouter basename={'/'}> 
      <Switch>
        <Route component={Home} path='/home'/>
        <Route component={CadastroNoticia} path='/cadastronoticia'   />
        <Route component={CadastroNoticiaTelemetria} path='/cadastronoticiatelemetria'   />
        <Route component={Noticia} path='/postagem/:id'   />
        <Route component={PostagensAnteriores} path='/postagens'   />
        <Route component={PostagensTelemetria} path='/postagenstelemetria'   />
        <Route component={HomeTelemetria} path='/hometelemetria'   />
        <Route component={HomeBalanca} path='/homebalanca'   />
      </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
