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

function App() {
  return (
    <Router>
      <BarraDeTarefa />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cadastronoticia' exact component={CadastroNoticia} />
        <Route path='/cadastronoticiatelemetria' exact component={CadastroNoticiaTelemetria} />
        <Route path='/postagem/:id' exact component={Noticia} />
        <Route path='/postagens' exact component={PostagensAnteriores} />
        <Route path='/postagenstelemetria' exact component={PostagensTelemetria} />
        <Route path='/hometelemetria' exact component={HomeTelemetria} />
        <Route path='/homebalanca' exact component={HomeBalanca} />
      </Switch>
    </Router>
  );
}

export default App;
