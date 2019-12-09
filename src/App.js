import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindLaundry from './components/FindLaundry'


const App = () => (
  <BrowserRouter>
  <Switch>
  <div>
    <Navbar />
    <Route exact path="/FindLaundry">
          <FindLaundry/>
        </Route>
    <Footer />
  </div>
  



  </Switch>
  
  
  
  </BrowserRouter>
);

export default App;
