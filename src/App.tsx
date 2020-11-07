import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css";
import "argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "argon-design-system-react/src/assets/scss/argon-design-system-react.scss";
import Home from './components/pages/Home/Home';
import Navigation from './components/util/Navigation/Navigation';

// Barebones app component, main content is routed in the Home component.
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
