import Index from './Pages/Index';
import Rules from './Pages/Rules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Servidor Hamburgueria 🍔</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/Rules" component={Rules} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}