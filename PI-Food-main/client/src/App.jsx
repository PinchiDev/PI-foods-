import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate'
import RecipeDetail from './components/RecipeDetail';


function App() {
  return (
    <div className='containerAll'>

        <div className='browserRouter'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/recipes/:id" component={RecipeDetail} />
            <Route path="/recipes" component={RecipeCreate} />
          </Switch>
        </BrowserRouter>
        </div>

        <div className="footerContainer">

          <div className="footer">
            Study full stack web development for free untill you find a job in
            <a href="www.soyhenry.com">soyhenry.com</a>
          </div>

        </div>
    </div>
  );
}

export default App;
