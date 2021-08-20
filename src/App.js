import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
// import Form from "./Form";
// import HomePage from "./HomePage";
// import Confirmation from "./Confirmation";

const initialFormValues = {
  name: "",
  size: "",
  topping1: "",
  topping2: "",
  special: "",
};

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda&apos;s Pizzaria</h1>
        <div className="nav-links">
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to="/">Home</Link>
        </div>
      </nav>
      {/*setting up the route and switch */}

      <Switch>
        <Route path="/create-pizza">{/* <Form /> */}</Route>

        <Route path="/">{/* <HomePage /> */}</Route>
      </Switch>
    </div>
  );
};
export default App;
