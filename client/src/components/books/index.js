import React from "react";
import { Route, Link } from "react-router-dom";

const Books = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/allbooks`}>AllBooks</Link>
      </li>
      <li>
        <Link to={`${match.url}/booksbyletter`}>Books By Letter</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={match.params.topicId} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

// const Book = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

export default Books;
