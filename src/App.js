import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import HomePage from "./HomePage";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda&apos;s Pizzaria</h1>
        <div className="nav-links">
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to="/">Home</Link>
          <Link to="/create-pizza">Create Pizza</Link>
        </div>
      </nav>
      {/*setting up the route and switch */}

      <Switch>
        <Route path="/create-pizza">
          <Form />
        </Route>

        <Route path="/confirmation">
          <Confirmation />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
