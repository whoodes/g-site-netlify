import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
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
import Testimonials from './Testimonials';
import PemTestimonial from './PemTestimonial';

/** A simple static component to render some text for the landing page. */
class App extends React.Component {

  render() {
    var history = createBrowserHistory();

    history.listen(location => {
      // Use setTimeout to make sure this runs after React Router's own listener
      setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        // to scroll to top, but we can't differentiate it from the others)
        if (location.action === 'POP') {
          return;
        }
        // In all other cases, scroll to top
        window.scrollTo(0, 0);
      });
    });

    return (
        /* eslint-disable-next-line */
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
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
              <Route exact path="/Testimonials" component={Testimonials}/>
              <Route exact path="/PemTestimonial" component={PemTestimonial}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}

export default App;
