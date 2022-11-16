import {
  Form,
  Footer,
  Button,
  Flex,
  Navbar,
  Home,
  About,
  Tools,
  Contact,
} from "..";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Utility = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/tools'>
          <Tools />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer color='shark'>
        <h1>©Florin Bizgan. All rights reserved </h1>
        <h3>2022</h3>
      </Footer>
    </Router>
  );
};

export default Utility;
