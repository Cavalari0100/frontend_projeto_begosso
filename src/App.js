import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BarraDeTarefa from './component/BarradeTarefa';
import Home from './pagina/Home';
import CadastroNoticia from './pagina/CadastroNoticia';
import Noticia from './pagina/Noticias';
import PostagensAnteriores from './pagina/PostagensAnteriores';
import HomeTelemetria from './pagina/HomeTelemetria';
import CadastroNoticiaTelemetria from './pagina/CadastroNoticiaTelemetria';

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
        <Route path='/hometelemetria' exact component={HomeTelemetria} />
      </Switch>
    </Router>
  );
}

export default App;
