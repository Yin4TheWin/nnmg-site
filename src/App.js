import SignIn from './Components/SignIn'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage'
import SignUp from './Components/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
