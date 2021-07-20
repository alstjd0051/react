import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:userid" component={Profile} />
        <Route path="/profile/" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*
  1 ~10
  1 ~100
  1 ~1000
  1 ~10000
 */
