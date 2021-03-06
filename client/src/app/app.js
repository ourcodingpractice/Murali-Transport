import './app.css';
import NavBar from './components/navbar/navBar';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import VehicleBooking from './components/booking/booking';
import VehicleRegister from './components/register/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={VehicleRegister} />
        <Route path="/booking" exact component={VehicleBooking} />
      </Switch>
      < Footer />
    </Router>
  );
}

export default App;
