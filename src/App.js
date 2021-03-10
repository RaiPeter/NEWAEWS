import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from "./components/Nav";
import Volunteer from './components/Volunteer'
import Help from './components/Help'
import OurWorks from './components/OurWorks';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Donation from './components/Donation';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
          <Route path="/" exact component={Home}/>
          <Route path="/volunteer" component={Volunteer}/>
          <Route path="/help" component={Help}/>
          <Route path="/our-works" component={OurWorks}/>
          <Route path="/about-us" component={Aboutus}/>
          <Route path="/contact-us" component={Contactus}/>
          <Route path="/donation" component={Donation}/>
        </Switch>
        </div>
    </Router>    
  );
}

export default App;
