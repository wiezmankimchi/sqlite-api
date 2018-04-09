import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Switch, Route } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/authors" component={byAuthor} />
        </Switch>
      </div>
    );
  }
}

const byAuthor = () => (
  <Form inline className={"form-font-08"}>
    <FormGroup>
      <Input
        type="text"
        name="name"
        id="author"
        placeholder="Filter by Author Name"
      />
    </FormGroup>
    <Button id="byAuthorName">Search</Button>
  </Form>
);

export default SideBar;
