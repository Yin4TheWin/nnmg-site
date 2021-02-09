import SignIn from './Components/SignIn'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SignIn/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
