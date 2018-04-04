import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Calibre Library</h1>
            <p className="lead">The eBook Management Library</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
