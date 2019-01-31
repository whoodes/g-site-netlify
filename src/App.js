import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';
import WorkExperience from './WorkExperience';

/** A simple static component to render some text for the landing page. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/WorkExperience" component={WorkExperience}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}

export default App;
