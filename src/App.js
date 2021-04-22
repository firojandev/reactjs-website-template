
import Home from './components/home/Home'
import Domain from './components/domain/Domain'
import Hosting from './components/hosting/Hosting'
import About from './components/about/About'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNavigation from './components/common/TopNavigation';
import Layout from './components/common/Layout';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/domain">
              <Domain />
            </Route>
            <Route path="/hosting">
              <Hosting />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
