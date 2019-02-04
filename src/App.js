import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';
import WorkExperience from './WorkExperience';
import FacilitiesManager from './Experience/FacilitiesManager';
import MaintenanceLead from './Experience/MaintenanceLead';
import Owner from './Experience/Owner';
import JourneyMan from './Experience/JourneyMan';
import SuperIntendent from './Experience/SuperIntendent';
import Supervisor from './Experience/Supervisor';
import BioLanding from './BioLanding';

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
              <Route exact path="/Experience/FacilitiesManager" component={FacilitiesManager}/>
              <Route exact path="/Experience/MaintenanceLead" component={MaintenanceLead}/>
              <Route exact path="/Experience/Owner" component={Owner}/>
              <Route exact path="/Experience/JourneyMan" component={JourneyMan}/>
              <Route exact path="/Experience/SuperIntendent" component={SuperIntendent}/>
              <Route exact path="/Experience/Supervisor" component={Supervisor}/>
              <Route exact path="/BioLanding" component={BioLanding}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}

export default App;
