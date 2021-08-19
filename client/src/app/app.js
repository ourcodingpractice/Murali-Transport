import './app.css';
import NavBar from '../app/components/navbar/navBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
