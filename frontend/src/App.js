import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import './AppPhone.scss';
import { loadUser } from './action/userAction';
import Store from './store'
import ProtectedRoute from './components/route/ProtectedRoute';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Profile from './components/profile/Profile';
import Shop from './components/shop/Shop';
import Termsofuse from './components/terms/Termsofuse';
import NotFound from './components/notfound/NotFound';
import Privacy from './components/privacy/Privacy';
import Activities from './components/activities/Activities';
import ActivitiesDetails from './components/activities/ActivitiesDetails/ActivitiesDetails';
import Faq from './components/faq/Faq';
import Address from './components/address/Address';
import NearestPoint from './components/nearestpoint/NearestPoint';
import Tips from './components/tips/Tips';
import OurStory from './components/ourstory/OurStory';
import OurParthership from './components/ourpartnership/OurParthership';
import Subscription from './components/subscription/Subscription';
import ContacUs from './components/contactus/ContacUs';
import PointCompression from './components/pointcompression/PointCompression';
import Redeem from './components/redeem/Redeem';
import Challenges from './components/challenges/Challenges';

function App() {

  useEffect(() => {
    Store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Terms" component={Termsofuse} />
            <Route path="/Privacy" component={Privacy} />
            <Route path="/Activities" component={Activities} exact />
            <Route path="/Activities/:id" exact component={ActivitiesDetails} />
            <Route path="/Help" component={Faq} />
            <Route path="/Our-Story" component={OurStory} />
            <Route path="/Our-Partnership" component={OurParthership} />
            <Route path="/Subcription" component={Subscription} />
            <Route path="/Contact-Us" component={ContacUs} />
            <Route path="/" component={Home} exact />

            <ProtectedRoute path="/Profile" component={Profile} />
            <ProtectedRoute path="/Address" component={Address} />
            <ProtectedRoute path="/Nearest-Point" component={NearestPoint} />
            <ProtectedRoute path="/Tips" component={Tips} />
            <ProtectedRoute path="/Point-Compression" component={PointCompression} />
            <ProtectedRoute path="/Reedem" component={Redeem} />
            <ProtectedRoute path="/Challenges" component={Challenges} />

            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
