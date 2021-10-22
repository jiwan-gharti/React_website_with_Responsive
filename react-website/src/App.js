
import { Redirect, Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </>


  );
}

export default App;
