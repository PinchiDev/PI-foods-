import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
