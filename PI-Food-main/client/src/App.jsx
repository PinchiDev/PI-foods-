import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/recipes' component={RecipeCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
