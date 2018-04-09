import React from "react";
import { Switch, Route } from "react-router-dom";
import Books from "./books";
import Authors from "./authors";
import Tags from "./tags";
import LastAdded from "./lastadded";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={LastAdded} />
      <Route path="/books" component={Books} />
      <Route path="/authors" component={Authors} />
      <Route path="/tags" component={Tags} />
    </Switch>
  </main>
);

export default Main;
