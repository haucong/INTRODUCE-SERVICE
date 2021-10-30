import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Redirect to='/'/>
      </Switch>
    </>
  )
}

export default App;
