
import React from 'react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePromotion from './pages/CreatePromotion'
import MyPromotions from './pages/MyPromotions'
import Logout from './pages/Logout'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
    <Router>
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/anuncio" component={CreatePromotion} />
          <Route exact path="/entrar" component={Login} />
          <Route exact path="/promocoes" component={MyPromotions} />
          <Route exact path="/sair" component={Logout} />
        </Switch>
        <Footer />
      </React.StrictMode>
      </Router>
    </div>
  );
}

export default App;
