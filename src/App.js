import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactPage from "./containers/ContactPage";
import DetailContactPage from "./containers/DetailContactPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={ContactPage} />
        <Route
          path={"/detail-contact/:id"}
          exact
          component={DetailContactPage}
        />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
